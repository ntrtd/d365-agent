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
import type { ChronologicalInvoicePostingParametersApi } from './ChronologicalInvoicePostingParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ChronologicalInvoicePostingParameters" of service "d365_metadata".
 */
export class ChronologicalInvoicePostingParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ChronologicalInvoicePostingParametersType<T>
{
  /**
   * Technical entity name for ChronologicalInvoicePostingParameters.
   */
  static override _entityName = 'ChronologicalInvoicePostingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChronologicalInvoicePostingParameters entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason Code For Earlier Invoices.
   * @nullable
   */
  declare reasonCodeForEarlierInvoices?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Posting Earlier Invoices Enabled.
   * @nullable
   */
  declare isPostingEarlierInvoicesEnabled?: NoYes | null;

  constructor(_entityApi: ChronologicalInvoicePostingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ChronologicalInvoicePostingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  reasonCodeForEarlierInvoices?: DeserializedType<T, 'Edm.String'> | null;
  isPostingEarlierInvoicesEnabled?: NoYes | null;
}
