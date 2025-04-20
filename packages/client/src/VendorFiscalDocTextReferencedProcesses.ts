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
import type { VendorFiscalDocTextReferencedProcessesApi } from './VendorFiscalDocTextReferencedProcessesApi';
import { AgencyBr } from './AgencyBr';

/**
 * This class represents the entity "VendorFiscalDocTextReferencedProcesses" of service "d365_metadata".
 */
export class VendorFiscalDocTextReferencedProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorFiscalDocTextReferencedProcessesType<T>
{
  /**
   * Technical entity name for VendorFiscalDocTextReferencedProcesses.
   */
  static override _entityName = 'VendorFiscalDocTextReferencedProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorFiscalDocTextReferencedProcesses entity.
   */
  static _keys = [
    'dataAreaId',
    'Vendor',
    'FiscalDocumentText',
    'Agency',
    'ProcessNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor.
   */
  declare vendor: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Text.
   */
  declare fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  /**
   * Agency.
   * @nullable
   */
  declare agency?: AgencyBr | null;
  /**
   * Process Number.
   */
  declare processNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: VendorFiscalDocTextReferencedProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorFiscalDocTextReferencedProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendor: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  agency?: AgencyBr | null;
  processNumber: DeserializedType<T, 'Edm.String'>;
}
