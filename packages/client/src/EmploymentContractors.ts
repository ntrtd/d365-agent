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
import type { EmploymentContractorsApi } from './EmploymentContractorsApi';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  PurchaseOrderHeaders,
  PurchaseOrderHeadersType
} from './PurchaseOrderHeaders';
import { Employments, EmploymentsType } from './Employments';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';

/**
 * This class represents the entity "EmploymentContractors" of service "d365_metadata".
 */
export class EmploymentContractors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmploymentContractorsType<T>
{
  /**
   * Technical entity name for EmploymentContractors.
   */
  static override _entityName = 'EmploymentContractors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentContractors entity.
   */
  static _keys = [
    'PersonnelNumber',
    'EmploymentLegalEntityId',
    'EmploymentStartDate',
    'EmploymentEndDate',
    'StartDate',
    'EndDate'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Legal Entity Id.
   */
  declare employmentLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Requisition Id.
   * @nullable
   */
  declare purchaseRequisitionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeaders} entity.
   */
  declare purchaseOrderHeader?: PurchaseOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Employments} entity.
   */
  declare employment?: Employments<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2?: PurchaseOrderHeadersV2<T> | null;

  constructor(_entityApi: EmploymentContractorsApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentContractorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  employmentLegalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseRequisitionId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorV2?: VendorsV2Type<T> | null;
  purchaseOrderHeader?: PurchaseOrderHeadersType<T> | null;
  employment?: EmploymentsType<T> | null;
  purchaseOrderHeaderV2?: PurchaseOrderHeadersV2Type<T> | null;
}
