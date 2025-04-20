/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link VendInvoicePostingDateAutoAdjustment}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum VendInvoicePostingDateAutoAdjustment {
  /**
   * Original value: 0
   */
  NoChange = 'NoChange',
  /**
   * Original value: 1
   */
  AlwaysChangeToSystemDate = 'AlwaysChangeToSystemDate',
  /**
   * Original value: 2
   */
  ChangeToSystemDateWhenPeriodIsOnHoldOrClosed = 'ChangeToSystemDateWhenPeriodIsOnHoldOrClosed',
  /**
   * Original value: 3
   */
  ChangeToFirstDayOfNewPeriodWhenPeriodIsOnHoldOrClosed = 'ChangeToFirstDayOfNewPeriodWhenPeriodIsOnHoldOrClosed'
}
