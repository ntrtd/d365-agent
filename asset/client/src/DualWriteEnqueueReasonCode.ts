/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link DualWriteEnqueueReasonCode}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum DualWriteEnqueueReasonCode {
  /**
   * Original value: 0
   */
  RequiredAsync = 'RequiredAsync',
  /**
   * Original value: 1
   */
  Timeout = 'Timeout',
  /**
   * Original value: 2
   */
  TransactionLimit = 'TransactionLimit',
  /**
   * Original value: 3
   */
  InitialSync = 'InitialSync',
  /**
   * Original value: 4
   */
  ResumeSync = 'ResumeSync',
  /**
   * Original value: 5
   */
  ContinuousAsync = 'ContinuousAsync',
  /**
   * Original value: 6
   */
  ErrorRetry = 'ErrorRetry'
}
