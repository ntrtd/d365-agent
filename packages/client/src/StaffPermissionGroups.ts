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
import type { StaffPermissionGroupsApi } from './StaffPermissionGroupsApi';
import { NoYes } from './NoYes';
import { RetailPriceOverride } from './RetailPriceOverride';

/**
 * This class represents the entity "StaffPermissionGroups" of service "d365_metadata".
 */
export class StaffPermissionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements StaffPermissionGroupsType<T>
{
  /**
   * Technical entity name for StaffPermissionGroups.
   */
  static override _entityName = 'StaffPermissionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StaffPermissionGroups entity.
   */
  static _keys = ['dataAreaId', 'PermissionGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Permission Group Id.
   */
  declare permissionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Allow Open Drawer Only.
   * @nullable
   */
  declare isAllowOpenDrawerOnly?: NoYes | null;
  /**
   * Max Discount Percent.
   */
  declare maxDiscountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Max Total Discount Amount.
   */
  declare maxTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Allow Floating Tender Declaration.
   * @nullable
   */
  declare isAllowFloatingTenderDeclaration?: NoYes | null;
  /**
   * Is Allow Z Report Printing.
   * @nullable
   */
  declare isAllowZReportPrinting?: NoYes | null;
  /**
   * Is Allow Transaction Suspension.
   * @nullable
   */
  declare isAllowTransactionSuspension?: NoYes | null;
  /**
   * Allow Price Override.
   * @nullable
   */
  declare allowPriceOverride?: RetailPriceOverride | null;
  /**
   * Max Line Discount Amount.
   */
  declare maxLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Allow Transaction Voiding.
   * @nullable
   */
  declare isAllowTransactionVoiding?: NoYes | null;
  /**
   * Permission Group Name.
   * @nullable
   */
  declare permissionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Total Discount Percent.
   */
  declare maxTotalDiscountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Manager Privileges.
   * @nullable
   */
  declare isManagerPrivileges?: NoYes | null;
  /**
   * Is Allow Tender Declaration.
   * @nullable
   */
  declare isAllowTenderDeclaration?: NoYes | null;
  /**
   * Is Allow X Report Printing.
   * @nullable
   */
  declare isAllowXReportPrinting?: NoYes | null;
  /**
   * Is Allow Change No Void.
   * @nullable
   */
  declare isAllowChangeNoVoid?: NoYes | null;

  constructor(_entityApi: StaffPermissionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface StaffPermissionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  permissionGroupId: DeserializedType<T, 'Edm.String'>;
  isAllowOpenDrawerOnly?: NoYes | null;
  maxDiscountPercent: DeserializedType<T, 'Edm.Decimal'>;
  maxTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isAllowFloatingTenderDeclaration?: NoYes | null;
  isAllowZReportPrinting?: NoYes | null;
  isAllowTransactionSuspension?: NoYes | null;
  allowPriceOverride?: RetailPriceOverride | null;
  maxLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isAllowTransactionVoiding?: NoYes | null;
  permissionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  maxTotalDiscountPercent: DeserializedType<T, 'Edm.Decimal'>;
  isManagerPrivileges?: NoYes | null;
  isAllowTenderDeclaration?: NoYes | null;
  isAllowXReportPrinting?: NoYes | null;
  isAllowChangeNoVoid?: NoYes | null;
}
