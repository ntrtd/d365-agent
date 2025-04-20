/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailPosPermissionGroupsApi } from './RetailPosPermissionGroupsApi';
import { NoYes } from './NoYes';
import { RetailAllowPrintingReceiptCopy } from './RetailAllowPrintingReceiptCopy';
import { RetailPriceOverride } from './RetailPriceOverride';
import {
  RetailJobPosPermissionGroups,
  RetailJobPosPermissionGroupsType
} from './RetailJobPosPermissionGroups';
import {
  RetailPositionPosPermissions,
  RetailPositionPosPermissionsType
} from './RetailPositionPosPermissions';

/**
 * This class represents the entity "RetailPosPermissionGroups" of service "d365_metadata".
 */
export class RetailPosPermissionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailPosPermissionGroupsType<T>
{
  /**
   * Technical entity name for RetailPosPermissionGroups.
   */
  static override _entityName = 'RetailPosPermissionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPosPermissionGroups entity.
   */
  static _keys = ['PosPermissionGroupId'];
  /**
   * Pos Permission Group Id.
   */
  declare posPermissionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Max Discount Percentage.
   */
  declare maxDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Kit Disassembly.
   * @nullable
   */
  declare allowKitDisassembly?: NoYes | null;
  /**
   * Max Line Discount Amount.
   */
  declare maxLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Retrieve Order.
   * @nullable
   */
  declare allowRetrieveOrder?: NoYes | null;
  /**
   * Allow Printing Receipt Copy.
   * @nullable
   */
  declare allowPrintingReceiptCopy?: RetailAllowPrintingReceiptCopy | null;
  /**
   * Allow Use Shared Shift.
   * @nullable
   */
  declare allowUseSharedShift?: NoYes | null;
  /**
   * Allow Password Change.
   * @nullable
   */
  declare allowPasswordChange?: NoYes | null;
  /**
   * Allow Skip Health Check Error.
   * @nullable
   */
  declare allowSkipHealthCheckError?: NoYes | null;
  /**
   * Allow Create Transfer Order.
   * @nullable
   */
  declare allowCreateTransferOrder?: NoYes | null;
  /**
   * Allow Transaction Voiding.
   * @nullable
   */
  declare allowTransactionVoiding?: NoYes | null;
  /**
   * Allow Skip Fiscal Registration.
   * @nullable
   */
  declare allowSkipFiscalRegistration?: NoYes | null;
  /**
   * Allow Transaction Suspension.
   * @nullable
   */
  declare allowTransactionSuspension?: NoYes | null;
  /**
   * Allow Task Guides.
   * @nullable
   */
  declare allowTaskGuides?: NoYes | null;
  /**
   * Max Line Return Amount.
   */
  declare maxLineReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Close Shift.
   * @nullable
   */
  declare allowCloseShift?: NoYes | null;
  /**
   * Allow Create Order.
   * @nullable
   */
  declare allowCreateOrder?: NoYes | null;
  /**
   * Allow Reset Password.
   * @nullable
   */
  declare allowResetPassword?: NoYes | null;
  /**
   * Allow Post Stock Counting.
   * @nullable
   */
  declare allowPostStockCounting?: NoYes | null;
  /**
   * Allow Setup Label Printer.
   * @nullable
   */
  declare allowSetupLabelPrinter?: NoYes | null;
  /**
   * Allow Sale Outside Assortment.
   * @nullable
   */
  declare allowSaleOutsideAssortment?: NoYes | null;
  /**
   * Max Total Discount Amount.
   */
  declare maxTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Handheld.
   * @nullable
   */
  declare useHandheld?: NoYes | null;
  /**
   * Allow Post Inventory Adjustment.
   * @nullable
   */
  declare allowPostInventoryAdjustment?: NoYes | null;
  /**
   * Manager Privileges.
   * @nullable
   */
  declare managerPrivileges?: NoYes | null;
  /**
   * Allow Change No Void.
   * @nullable
   */
  declare allowChangeNoVoid?: NoYes | null;
  /**
   * Allow Postpone Registration.
   * @nullable
   */
  declare allowPostponeRegistration?: NoYes | null;
  /**
   * Allow Confirm Purchase Order.
   * @nullable
   */
  declare allowConfirmPurchaseOrder?: NoYes | null;
  /**
   * Allow Task Management.
   * @nullable
   */
  declare allowTaskManagement?: NoYes | null;
  /**
   * Max Total Discount Percentage.
   */
  declare maxTotalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Manage Shared Shift.
   * @nullable
   */
  declare allowManageSharedShift?: NoYes | null;
  /**
   * Allow Open Drawer Only.
   * @nullable
   */
  declare allowOpenDrawerOnly?: NoYes | null;
  /**
   * Allow Mass Activation.
   * @nullable
   */
  declare allowMassActivation?: NoYes | null;
  /**
   * Allow Create Purchase Order.
   * @nullable
   */
  declare allowCreatePurchaseOrder?: NoYes | null;
  /**
   * Allow Price Override.
   * @nullable
   */
  declare allowPriceOverride?: RetailPriceOverride | null;
  /**
   * Allow Skip Registration Or Mark As Registered.
   * @nullable
   */
  declare allowSkipRegistrationOrMarkAsRegistered?: NoYes | null;
  /**
   * Manage Device.
   * @nullable
   */
  declare manageDevice?: NoYes | null;
  /**
   * Allow Multiple Logins.
   * @nullable
   */
  declare allowMultipleLogins?: NoYes | null;
  /**
   * Allow Blind Close.
   * @nullable
   */
  declare allowBlindClose?: NoYes | null;
  /**
   * Allow Edit Order.
   * @nullable
   */
  declare allowEditOrder?: NoYes | null;
  /**
   * Allow Floating Tender Declaration.
   * @nullable
   */
  declare allowFloatingTenderDeclaration?: NoYes | null;
  /**
   * Allow Reject Order.
   * @nullable
   */
  declare allowRejectOrder?: NoYes | null;
  /**
   * Max Total Return Amount.
   */
  declare maxTotalReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Tender Declaration.
   * @nullable
   */
  declare allowTenderDeclaration?: NoYes | null;
  /**
   * Allow X Report Printing.
   * @nullable
   */
  declare allowXReportPrinting?: NoYes | null;
  /**
   * Allow Change Peripheral Station.
   * @nullable
   */
  declare allowChangePeripheralStation?: NoYes | null;
  /**
   * Allow Sales Tax Change.
   * @nullable
   */
  declare allowSalesTaxChange?: NoYes | null;
  /**
   * Allow Accept Order.
   * @nullable
   */
  declare allowAcceptOrder?: NoYes | null;
  /**
   * Allow View Timeclock Entries.
   * @nullable
   */
  declare allowViewTimeclockEntries?: NoYes | null;
  /**
   * Allow Z Report Printing.
   * @nullable
   */
  declare allowZReportPrinting?: NoYes | null;
  /**
   * Allow Multiple Shift Logon.
   * @nullable
   */
  declare allowMultipleShiftLogon?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RetailJobPosPermissionGroups} entity.
   */
  declare retailJobPosPermissionGroup?: RetailJobPosPermissionGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailPositionPosPermissions} entity.
   */
  declare retailPositionPosPermission: RetailPositionPosPermissions<T>[];

  constructor(_entityApi: RetailPosPermissionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPosPermissionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  posPermissionGroupId: DeserializedType<T, 'Edm.String'>;
  maxDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowKitDisassembly?: NoYes | null;
  maxLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  allowRetrieveOrder?: NoYes | null;
  allowPrintingReceiptCopy?: RetailAllowPrintingReceiptCopy | null;
  allowUseSharedShift?: NoYes | null;
  allowPasswordChange?: NoYes | null;
  allowSkipHealthCheckError?: NoYes | null;
  allowCreateTransferOrder?: NoYes | null;
  allowTransactionVoiding?: NoYes | null;
  allowSkipFiscalRegistration?: NoYes | null;
  allowTransactionSuspension?: NoYes | null;
  allowTaskGuides?: NoYes | null;
  maxLineReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowCloseShift?: NoYes | null;
  allowCreateOrder?: NoYes | null;
  allowResetPassword?: NoYes | null;
  allowPostStockCounting?: NoYes | null;
  allowSetupLabelPrinter?: NoYes | null;
  allowSaleOutsideAssortment?: NoYes | null;
  maxTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  useHandheld?: NoYes | null;
  allowPostInventoryAdjustment?: NoYes | null;
  managerPrivileges?: NoYes | null;
  allowChangeNoVoid?: NoYes | null;
  allowPostponeRegistration?: NoYes | null;
  allowConfirmPurchaseOrder?: NoYes | null;
  allowTaskManagement?: NoYes | null;
  maxTotalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowManageSharedShift?: NoYes | null;
  allowOpenDrawerOnly?: NoYes | null;
  allowMassActivation?: NoYes | null;
  allowCreatePurchaseOrder?: NoYes | null;
  allowPriceOverride?: RetailPriceOverride | null;
  allowSkipRegistrationOrMarkAsRegistered?: NoYes | null;
  manageDevice?: NoYes | null;
  allowMultipleLogins?: NoYes | null;
  allowBlindClose?: NoYes | null;
  allowEditOrder?: NoYes | null;
  allowFloatingTenderDeclaration?: NoYes | null;
  allowRejectOrder?: NoYes | null;
  maxTotalReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowTenderDeclaration?: NoYes | null;
  allowXReportPrinting?: NoYes | null;
  allowChangePeripheralStation?: NoYes | null;
  allowSalesTaxChange?: NoYes | null;
  allowAcceptOrder?: NoYes | null;
  allowViewTimeclockEntries?: NoYes | null;
  allowZReportPrinting?: NoYes | null;
  allowMultipleShiftLogon?: NoYes | null;
  retailJobPosPermissionGroup?: RetailJobPosPermissionGroupsType<T> | null;
  retailPositionPosPermission: RetailPositionPosPermissionsType<T>[];
}
