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
import type { LtmVendInvoiceJourApi } from './LtmVendInvoiceJourApi';

/**
 * This class represents the entity "LTMVendInvoiceJour" of service "d365_metadata".
 */
export class LtmVendInvoiceJour<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmVendInvoiceJourType<T>
{
  /**
   * Technical entity name for LtmVendInvoiceJour.
   */
  static override _entityName = 'LTMVendInvoiceJour';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmVendInvoiceJour entity.
   */
  static _keys = ['dataAreaId', 'RefRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Point Prefix.
   * @nullable
   */
  declare salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Document Num.
   * @nullable
   */
  declare completeDocumentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 07.
   * @nullable
   */
  declare listFieldCode07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 06.
   * @nullable
   */
  declare listFieldCode06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 05.
   * @nullable
   */
  declare listFieldCode05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 04.
   * @nullable
   */
  declare listFieldCode04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 03.
   * @nullable
   */
  declare listFieldCode03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 02.
   * @nullable
   */
  declare listFieldCode02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 01.
   * @nullable
   */
  declare listFieldCode01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 09.
   * @nullable
   */
  declare listFieldCode09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 08.
   * @nullable
   */
  declare listFieldCode08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 10.
   * @nullable
   */
  declare listFieldCode10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 3.
   * @nullable
   */
  declare concept3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Doc Num.
   * @nullable
   */
  declare countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 2.
   * @nullable
   */
  declare concept2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Classification Id.
   * @nullable
   */
  declare documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Type Id.
   * @nullable
   */
  declare stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 1.
   * @nullable
   */
  declare concept1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cai Cae Due Date.
   */
  declare caiCaeDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Doc Type Id.
   * @nullable
   */
  declare countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cai Cae.
   * @nullable
   */
  declare caiCae?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 10.
   * @nullable
   */
  declare listField10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Code.
   * @nullable
   */
  declare controlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Payer Type Id.
   * @nullable
   */
  declare taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 09.
   * @nullable
   */
  declare listField09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 08.
   * @nullable
   */
  declare listField08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 05.
   * @nullable
   */
  declare listField05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 04.
   * @nullable
   */
  declare listField04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 07.
   * @nullable
   */
  declare listField07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 06.
   * @nullable
   */
  declare listField06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 01.
   * @nullable
   */
  declare listField01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 03.
   * @nullable
   */
  declare listField03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Num.
   * @nullable
   */
  declare stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 02.
   * @nullable
   */
  declare listField02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parm Id.
   * @nullable
   */
  declare parmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Set Id.
   * @nullable
   */
  declare withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Point Id.
   * @nullable
   */
  declare salesPointId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmVendInvoiceJourApi<T>) {
    super(_entityApi);
  }
}

export interface LtmVendInvoiceJourType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  completeDocumentNum?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode07?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode06?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode05?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode04?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode03?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode02?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode01?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode09?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode08?: DeserializedType<T, 'Edm.String'> | null;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode10?: DeserializedType<T, 'Edm.String'> | null;
  concept3?: DeserializedType<T, 'Edm.String'> | null;
  countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  concept2?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  concept1?: DeserializedType<T, 'Edm.String'> | null;
  caiCaeDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  caiCae?: DeserializedType<T, 'Edm.String'> | null;
  listField10?: DeserializedType<T, 'Edm.String'> | null;
  controlCode?: DeserializedType<T, 'Edm.String'> | null;
  taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  listField09?: DeserializedType<T, 'Edm.String'> | null;
  listField08?: DeserializedType<T, 'Edm.String'> | null;
  listField05?: DeserializedType<T, 'Edm.String'> | null;
  listField04?: DeserializedType<T, 'Edm.String'> | null;
  listField07?: DeserializedType<T, 'Edm.String'> | null;
  listField06?: DeserializedType<T, 'Edm.String'> | null;
  listField01?: DeserializedType<T, 'Edm.String'> | null;
  listField03?: DeserializedType<T, 'Edm.String'> | null;
  stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  listField02?: DeserializedType<T, 'Edm.String'> | null;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  salesPointId?: DeserializedType<T, 'Edm.String'> | null;
}
