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
import type { CustomerFiscalDocTextReferencedProcessesApi } from './CustomerFiscalDocTextReferencedProcessesApi';
import { AgencyBr } from './AgencyBr';

/**
 * This class represents the entity "CustomerFiscalDocTextReferencedProcesses" of service "d365_metadata".
 */
export class CustomerFiscalDocTextReferencedProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerFiscalDocTextReferencedProcessesType<T>
{
  /**
   * Technical entity name for CustomerFiscalDocTextReferencedProcesses.
   */
  static override _entityName = 'CustomerFiscalDocTextReferencedProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerFiscalDocTextReferencedProcesses entity.
   */
  static _keys = [
    'dataAreaId',
    'Customer',
    'FiscalDocumentText',
    'Agency',
    'ProcessNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer.
   */
  declare customer: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: CustomerFiscalDocTextReferencedProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerFiscalDocTextReferencedProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customer: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  agency?: AgencyBr | null;
  processNumber: DeserializedType<T, 'Edm.String'>;
}
