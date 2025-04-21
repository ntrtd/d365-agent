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
import type { DocumentRoutingPrintersApi } from './DocumentRoutingPrintersApi';
import { NoYesCombo } from './NoYesCombo';

/**
 * This class represents the entity "DocumentRoutingPrinters" of service "d365_metadata".
 */
export class DocumentRoutingPrinters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentRoutingPrintersType<T>
{
  /**
   * Technical entity name for DocumentRoutingPrinters.
   */
  static override _entityName = 'DocumentRoutingPrinters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentRoutingPrinters entity.
   */
  static _keys = ['ClientApplicationId', 'PrinterPath'];
  /**
   * Client Application Id.
   */
  declare clientApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Printer Path.
   */
  declare printerPath: DeserializedType<T, 'Edm.String'>;
  /**
   * Printer Name.
   * @nullable
   */
  declare printerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Description.
   * @nullable
   */
  declare printerDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Is Active.
   * @nullable
   */
  declare printerIsActive?: NoYesCombo | null;
  /**
   * Printer Id.
   */
  declare printerId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Printer Company Id.
   * @nullable
   */
  declare printerCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Client Application Description.
   * @nullable
   */
  declare clientApplicationDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: DocumentRoutingPrintersApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentRoutingPrintersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  clientApplicationId: DeserializedType<T, 'Edm.String'>;
  printerPath: DeserializedType<T, 'Edm.String'>;
  printerName?: DeserializedType<T, 'Edm.String'> | null;
  printerDescription?: DeserializedType<T, 'Edm.String'> | null;
  printerIsActive?: NoYesCombo | null;
  printerId: DeserializedType<T, 'Edm.Guid'>;
  printerCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  clientApplicationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
