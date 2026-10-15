/**
 * Standalone Dummy Data for Gtags Code View
 * Provides 4 levels of callers hierarchy and rich references
 * for 3 symbols: handle_connection, process_packet, parse_config
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.GTAGS_DUMMY_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 3 Initial tabs for Callers and 3 Initial tabs for References
  const initialTabs = {
    callers: [
      { symbol: 'handle_connection', mode: 'callers' },
      { symbol: 'process_packet', mode: 'callers' },
      { symbol: 'parse_config', mode: 'callers' }
    ],
    references: [
      { symbol: 'handle_connection', mode: 'references' },
      { symbol: 'process_packet', mode: 'references' },
      { symbol: 'parse_config', mode: 'references' }
    ]
  };

  /**
   * CALLERS HIERARCHY (Up to 4 levels deep for each root symbol)
   * 
   * Level 1: Root symbol (e.g. handle_connection)
   * Level 2: Callers of Level 1 (e.g. worker_thread_cycle, dispatch_event, ssl_handshake_complete)
   * Level 3: Callers of Level 2 (e.g. worker_pool_spawn, task_queue_pop, event_loop_step, etc.)
   * Level 4: Callers of Level 3 (e.g. server_init_workers, cluster_node_start, server_main_loop, etc.)
   * Level 5: Top-level entry points (main) or terminating leaf nodes
   */
  const callers = {
    // ==========================================
    // SYMBOL 1: handle_connection
    // ==========================================
    // Level 1 -> Level 2
    'handle_connection': [
      { name: 'worker_thread_cycle', file: 'src/net/worker.c', line: 84 },
      { name: 'dispatch_event', file: 'src/event/dispatcher.c', line: 142 },
      { name: 'ssl_handshake_complete', file: 'src/crypto/tls.c', line: 205 }
    ],

    // Level 2 -> Level 3
    'worker_thread_cycle': [
      { name: 'worker_pool_spawn', file: 'src/pool/threadpool.c', line: 118 },
      { name: 'task_queue_pop', file: 'src/queue/task_queue.c', line: 64 }
    ],
    'dispatch_event': [
      { name: 'event_loop_step', file: 'src/event/epoll.c', line: 176 },
      { name: 'timer_expiry_callback', file: 'src/timer/wheel.c', line: 92 }
    ],
    'ssl_handshake_complete': [
      { name: 'tls_engine_poll', file: 'src/crypto/tls_engine.c', line: 310 },
      { name: 'cert_verify_callback', file: 'src/crypto/x509.c', line: 88 }
    ],

    // Level 3 -> Level 4
    'worker_pool_spawn': [
      { name: 'server_init_workers', file: 'src/server/server.c', line: 215 },
      { name: 'cluster_node_start', file: 'src/cluster/cluster.c', line: 402 }
    ],
    'task_queue_pop': [
      { name: 'io_uring_completion_drain', file: 'src/io/uring.c', line: 134 },
      { name: 'worker_drain_pending', file: 'src/net/worker.c', line: 320 }
    ],
    'event_loop_step': [
      { name: 'server_main_loop', file: 'src/server/server.c', line: 340 },
      { name: 'subservice_run', file: 'src/core/service.c', line: 156 }
    ],
    'timer_expiry_callback': [
      { name: 'tick_scheduler_step', file: 'src/timer/clock.c', line: 51 },
      { name: 'realtime_clock_sync', file: 'src/timer/sync.c', line: 74 }
    ],
    'tls_engine_poll': [
      { name: 'io_multiplexer_run', file: 'src/io/multiplex.c', line: 88 }
    ],
    'cert_verify_callback': [
      { name: 'tls_handshake_begin', file: 'src/crypto/tls.c', line: 112 }
    ],

    // Level 4 -> Level 5 (Root entry points)
    'server_init_workers': [
      { name: 'main', file: 'src/main.c', line: 55 }
    ],
    'cluster_node_start': [
      { name: 'main', file: 'src/main.c', line: 62 }
    ],
    'server_main_loop': [
      { name: 'main', file: 'src/main.c', line: 70 }
    ],
    'subservice_run': [
      { name: 'main', file: 'src/main.c', line: 78 }
    ],
    'io_multiplexer_run': [
      { name: 'main', file: 'src/main.c', line: 85 }
    ],
    'io_uring_completion_drain': [
      { name: 'main', file: 'src/main.c', line: 92 }
    ],
    'worker_drain_pending': [
      { name: 'main', file: 'src/main.c', line: 96 }
    ],
    'tick_scheduler_step': [
      { name: 'main', file: 'src/main.c', line: 104 }
    ],
    'realtime_clock_sync': [
      { name: 'main', file: 'src/main.c', line: 108 }
    ],
    'tls_handshake_begin': [
      { name: 'main', file: 'src/main.c', line: 115 }
    ],
    'main': [],

    // ==========================================
    // SYMBOL 2: process_packet
    // ==========================================
    // Level 1 -> Level 2
    'process_packet': [
      { name: 'net_rx_handler', file: 'src/net/driver.c', line: 120 },
      { name: 'udp_receive_datagram', file: 'src/net/udp.c', line: 75 },
      { name: 'raw_socket_input', file: 'src/net/socket.c', line: 230 }
    ],

    // Level 2 -> Level 3
    'net_rx_handler': [
      { name: 'nic_interrupt_handler', file: 'src/hw/nic.c', line: 144 },
      { name: 'packet_ring_drain', file: 'src/ring/ringbuf.c', line: 89 }
    ],
    'udp_receive_datagram': [
      { name: 'transport_layer_demux', file: 'src/net/transport.c', line: 165 },
      { name: 'dns_resolver_poll', file: 'src/dns/resolver.c', line: 98 }
    ],
    'raw_socket_input': [
      { name: 'pcap_replay_loop', file: 'src/tools/replay.c', line: 312 },
      { name: 'tunnel_device_read', file: 'src/net/tun.c', line: 185 }
    ],

    // Level 3 -> Level 4
    'nic_interrupt_handler': [
      { name: 'irq_dispatch_core', file: 'src/arch/irq.c', line: 54 },
      { name: 'pcie_msix_vector_fire', file: 'src/hw/pci.c', line: 210 }
    ],
    'packet_ring_drain': [
      { name: 'napi_poll_cycle', file: 'src/net/napi.c', line: 76 }
    ],
    'transport_layer_demux': [
      { name: 'ip_stack_recv', file: 'src/net/ipv4.c', line: 420 },
      { name: 'ipv6_route_input', file: 'src/net/ipv6.c', line: 315 }
    ],
    'dns_resolver_poll': [
      { name: 'dns_lookup_async', file: 'src/dns/client.c', line: 240 }
    ],
    'pcap_replay_loop': [
      { name: 'cli_benchmark_run', file: 'src/cli/bench.c', line: 115 }
    ],
    'tunnel_device_read': [
      { name: 'vpn_worker_thread', file: 'src/vpn/worker.c', line: 190 }
    ],

    // Level 4 -> Level 5 (Root entry points)
    'irq_dispatch_core': [
      { name: 'kernel_interrupt_vector', file: 'src/arch/irq_entry.S', line: 18 }
    ],
    'pcie_msix_vector_fire': [
      { name: 'kernel_interrupt_vector', file: 'src/arch/irq_entry.S', line: 24 }
    ],
    'napi_poll_cycle': [
      { name: 'ksoftirqd_main', file: 'src/kernel/softirq.c', line: 58 }
    ],
    'ip_stack_recv': [
      { name: 'network_subsystem_init', file: 'src/net/init.c', line: 92 }
    ],
    'ipv6_route_input': [
      { name: 'network_subsystem_init', file: 'src/net/init.c', line: 98 }
    ],
    'dns_lookup_async': [
      { name: 'main', file: 'src/main.c', line: 38 }
    ],
    'cli_benchmark_run': [
      { name: 'main', file: 'src/main.c', line: 40 }
    ],
    'vpn_worker_thread': [
      { name: 'main', file: 'src/main.c', line: 45 }
    ],
    'kernel_interrupt_vector': [],
    'ksoftirqd_main': [],
    'network_subsystem_init': [
      { name: 'main', file: 'src/main.c', line: 18 }
    ],

    // ==========================================
    // SYMBOL 3: parse_config
    // ==========================================
    // Level 1 -> Level 2
    'parse_config': [
      { name: 'load_server_profile', file: 'src/config/loader.c', line: 45 },
      { name: 'reload_config_signal', file: 'src/signal/handler.c', line: 88 },
      { name: 'cli_apply_overrides', file: 'src/cli/parser.c', line: 190 }
    ],

    // Level 2 -> Level 3
    'load_server_profile': [
      { name: 'bootstrap_system', file: 'src/core/bootstrap.c', line: 110 },
      { name: 'config_hot_reload', file: 'src/config/watcher.c', line: 72 }
    ],
    'reload_config_signal': [
      { name: 'posix_sighandler', file: 'src/signal/posix.c', line: 34 },
      { name: 'ipc_signal_notify', file: 'src/ipc/channel.c', line: 162 }
    ],
    'cli_apply_overrides': [
      { name: 'parse_arguments', file: 'src/cli/args.c', line: 145 },
      { name: 'env_var_override_eval', file: 'src/config/env.c', line: 83 }
    ],

    // Level 3 -> Level 4
    'bootstrap_system': [
      { name: 'init_subsystems', file: 'src/core/init.c', line: 56 },
      { name: 'cluster_init_config', file: 'src/cluster/setup.c', line: 122 }
    ],
    'config_hot_reload': [
      { name: 'inotify_event_pump', file: 'src/fs/watcher.c', line: 140 }
    ],
    'posix_sighandler': [
      { name: 'kernel_signal_trampoline', file: 'src/arch/sys.c', line: 12 }
    ],
    'ipc_signal_notify': [
      { name: 'ipc_listener_thread', file: 'src/ipc/listener.c', line: 95 }
    ],
    'parse_arguments': [
      { name: 'cli_entry', file: 'src/cli/main_cli.c', line: 30 }
    ],
    'env_var_override_eval': [
      { name: 'pre_init_runtime', file: 'src/core/runtime.c', line: 42 }
    ],

    // Level 4 -> Level 5 (Root entry points)
    'init_subsystems': [
      { name: 'main', file: 'src/main.c', line: 20 }
    ],
    'cluster_init_config': [
      { name: 'main', file: 'src/main.c', line: 24 }
    ],
    'inotify_event_pump': [
      { name: 'main', file: 'src/main.c', line: 28 }
    ],
    'kernel_signal_trampoline': [],
    'ipc_listener_thread': [
      { name: 'main', file: 'src/main.c', line: 32 }
    ],
    'cli_entry': [
      { name: 'main', file: 'src/main.c', line: 35 }
    ],
    'pre_init_runtime': [
      { name: 'main', file: 'src/main.c', line: 15 }
    ]
  };

  /**
   * REFERENCES LIST DATA
   * Rich code snippets with file path and line numbers
   */
  const references = {
    'handle_connection': [
      {
        file: 'src/server/server.c',
        displayFile: 'src/server/server.c',
        line: 182,
        code: '    int rc = handle_connection(client_fd, &client_addr);'
      },
      {
        file: 'src/net/worker.c',
        displayFile: 'src/net/worker.c',
        line: 84,
        code: '    if (job->type == JOB_NET_CONN) handle_connection(job->fd, job->addr);'
      },
      {
        file: 'src/event/dispatcher.c',
        displayFile: 'src/event/dispatcher.c',
        line: 142,
        code: '    return handle_connection(channel->sock, &channel->peer);'
      },
      {
        file: 'src/crypto/tls.c',
        displayFile: 'src/crypto/tls.c',
        line: 205,
        code: '    handle_connection(tls_ctx->underlying_fd, &tls_ctx->peer_addr);'
      },
      {
        file: 'src/include/network.h',
        displayFile: 'src/include/network.h',
        line: 29,
        code: 'int handle_connection(int fd, struct sockaddr_in *addr);'
      },
      {
        file: 'src/tests/test_net.c',
        displayFile: 'src/tests/test_net.c',
        line: 95,
        code: '    assert(handle_connection(mock_fd, &mock_addr) == 0);'
      }
    ],

    'process_packet': [
      {
        file: 'src/net/driver.c',
        displayFile: 'src/net/driver.c',
        line: 120,
        code: '    status = process_packet(rx_buf, rx_len, &meta);'
      },
      {
        file: 'src/net/udp.c',
        displayFile: 'src/net/udp.c',
        line: 75,
        code: '    process_packet(udp_payload, udp_len, &pkt_ctx);'
      },
      {
        file: 'src/net/socket.c',
        displayFile: 'src/net/socket.c',
        line: 230,
        code: '    err = process_packet(raw_pkt, len, NULL);'
      },
      {
        file: 'src/hw/nic.c',
        displayFile: 'src/hw/nic.c',
        line: 148,
        code: '    if (nic_validate_checksum(rx_desc)) process_packet(buf, len, &nic_meta);'
      },
      {
        file: 'src/include/packet.h',
        displayFile: 'src/include/packet.h',
        line: 44,
        code: 'int process_packet(const uint8_t *data, size_t len, packet_meta_t *meta);'
      },
      {
        file: 'src/filter/bpf.c',
        displayFile: 'src/filter/bpf.c',
        line: 61,
        code: '    if (bpf_filter(raw_pkt)) process_packet(raw_pkt, len, &meta);'
      }
    ],

    'parse_config': [
      {
        file: 'src/config/loader.c',
        displayFile: 'src/config/loader.c',
        line: 45,
        code: '    cfg = parse_config(filepath, CONF_STRICT);'
      },
      {
        file: 'src/signal/handler.c',
        displayFile: 'src/signal/handler.c',
        line: 88,
        code: '    new_cfg = parse_config(DEFAULT_CONFIG_PATH, 0);'
      },
      {
        file: 'src/cli/parser.c',
        displayFile: 'src/cli/parser.c',
        line: 190,
        code: '    parse_config(custom_conf, CONF_OVERWRITE);'
      },
      {
        file: 'src/include/config.h',
        displayFile: 'src/include/config.h',
        line: 18,
        code: 'config_t *parse_config(const char *path, uint32_t flags);'
      },
      {
        file: 'src/main.c',
        displayFile: 'src/main.c',
        line: 41,
        code: '    server_config = parse_config("/etc/gtags/server.conf", 0);'
      },
      {
        file: 'src/tests/test_config.c',
        displayFile: 'src/tests/test_config.c',
        line: 32,
        code: '    config_t *t = parse_config("fixtures/test.ini", CONF_TEST_MODE);'
      }
    ]
  };

  /**
   * Helper function to retrieve tags (callers or references)
   * Returns a Promise resolving to the data array, matching getTags API
   */
  function getTags(tagName, mode) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (mode === 'references') {
          if (references[tagName]) {
            resolve(references[tagName]);
          } else {
            // Generates synthetic references for any query
            resolve([
              {
                file: 'src/core/' + tagName + '.c',
                displayFile: 'src/core/' + tagName + '.c',
                line: 42,
                code: '    ' + tagName + '(ctx, &result);'
              },
              {
                file: 'src/include/' + tagName + '.h',
                displayFile: 'src/include/' + tagName + '.h',
                line: 15,
                code: 'int ' + tagName + '(context_t *ctx, result_t *res);'
              }
            ]);
          }
        } else {
          // Callers mode
          if (callers[tagName]) {
            resolve(callers[tagName]);
          } else {
            // Leaf node: empty callers
            resolve([]);
          }
        }
      }, 30);
    });
  }

  return {
    initialTabs: initialTabs,
    callers: callers,
    references: references,
    getTags: getTags
  };
});
