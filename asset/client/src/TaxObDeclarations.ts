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
import type { TaxObDeclarationsApi } from './TaxObDeclarationsApi';
import { TaxEvatStatus } from './TaxEvatStatus';
import { ContactPersonType } from './ContactPersonType';
import { TaxReportLayout } from './TaxReportLayout';

/**
 * This class represents the entity "TaxOBDeclarations" of service "d365_metadata".
 */
export class TaxObDeclarations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxObDeclarationsType<T>
{
  /**
   * Technical entity name for TaxObDeclarations.
   */
  static override _entityName = 'TaxOBDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxObDeclarations entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Description.
   * @nullable
   */
  declare collectionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: TaxEvatStatus | null;
  /**
   * Contact Initials.
   * @nullable
   */
  declare contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Group.
   * @nullable
   */
  declare fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone.
   * @nullable
   */
  declare contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Type.
   * @nullable
   */
  declare contactType?: ContactPersonType | null;
  /**
   * Collection Tax Report Field.
   */
  declare collectionTaxReportField: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collection Tax Report Layout.
   * @nullable
   */
  declare collectionTaxReportLayout?: TaxReportLayout | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Name.
   * @nullable
   */
  declare collectionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Id.
   * @nullable
   */
  declare contactId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxObDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxObDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
  collectionDescription?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  status?: TaxEvatStatus | null;
  contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  contactType?: ContactPersonType | null;
  collectionTaxReportField: DeserializedType<T, 'Edm.Int32'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  collectionTaxReportLayout?: TaxReportLayout | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  collectionName?: DeserializedType<T, 'Edm.String'> | null;
  contactId?: DeserializedType<T, 'Edm.String'> | null;
}
