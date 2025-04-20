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
import type { FiscalPrintersApi } from './FiscalPrintersApi';
import { PlFiscalPrinterType } from './PlFiscalPrinterType';
import { PlFiscalPosnetPrinterType } from './PlFiscalPosnetPrinterType';

/**
 * This class represents the entity "FiscalPrinters" of service "d365_metadata".
 */
export class FiscalPrinters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalPrintersType<T>
{
  /**
   * Technical entity name for FiscalPrinters.
   */
  static override _entityName = 'FiscalPrinters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalPrinters entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Com Port Number.
   */
  declare comPortNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fiscal Printer Type.
   * @nullable
   */
  declare fiscalPrinterType?: PlFiscalPrinterType | null;
  /**
   * Fiscal Cash Code.
   * @nullable
   */
  declare fiscalCashCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Of Printer.
   * @nullable
   */
  declare certificationOfPrinter?: PlFiscalPosnetPrinterType | null;

  constructor(_entityApi: FiscalPrintersApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalPrintersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  comPortNumber: DeserializedType<T, 'Edm.Int32'>;
  fiscalPrinterType?: PlFiscalPrinterType | null;
  fiscalCashCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  certificationOfPrinter?: PlFiscalPosnetPrinterType | null;
}
