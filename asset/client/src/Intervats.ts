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
import type { IntervatsApi } from './IntervatsApi';
import { NoYes } from './NoYes';
import { TaxIntervatFrequency } from './TaxIntervatFrequency';
import { TaxIntervatStatus } from './TaxIntervatStatus';

/**
 * This class represents the entity "Intervats" of service "d365_metadata".
 */
export class Intervats<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntervatsType<T>
{
  /**
   * Technical entity name for Intervats.
   */
  static override _entityName = 'Intervats';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Intervats entity.
   */
  static _keys = ['dataAreaId', 'IntervatId', 'ValidFrom', 'ValidTo'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Intervat Id.
   */
  declare intervatId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Number.
   * @nullable
   */
  declare salesTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Box.
   * @nullable
   */
  declare salesTaxBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preparation Date.
   */
  declare preparationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period.
   * @nullable
   */
  declare period?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request For Reimbursement.
   * @nullable
   */
  declare requestForReimbursement?: NoYes | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nil Annual Listing.
   * @nullable
   */
  declare nilAnnualListing?: NoYes | null;
  /**
   * Filename.
   * @nullable
   */
  declare filename?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request For Payment Forms.
   * @nullable
   */
  declare requestForPaymentForms?: NoYes | null;
  /**
   * Period Frequency.
   * @nullable
   */
  declare periodFrequency?: TaxIntervatFrequency | null;
  /**
   * E Mail.
   * @nullable
   */
  declare eMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: TaxIntervatStatus | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replaced Vat Declaration.
   * @nullable
   */
  declare replacedVatDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntervatsApi<T>) {
    super(_entityApi);
  }
}

export interface IntervatsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  intervatId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxBox?: DeserializedType<T, 'Edm.String'> | null;
  preparationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  period?: DeserializedType<T, 'Edm.String'> | null;
  requestForReimbursement?: NoYes | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  nilAnnualListing?: NoYes | null;
  filename?: DeserializedType<T, 'Edm.String'> | null;
  requestForPaymentForms?: NoYes | null;
  periodFrequency?: TaxIntervatFrequency | null;
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  status?: TaxIntervatStatus | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  replacedVatDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
}
