/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmVendInvoiceJour } from './LtmVendInvoiceJour';
import { LtmVendInvoiceJourRequestBuilder } from './LtmVendInvoiceJourRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LtmVendInvoiceJourApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmVendInvoiceJour<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LtmVendInvoiceJourApi<DeSerializersT> {
    return new LtmVendInvoiceJourApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmVendInvoiceJour;

  requestBuilder(): LtmVendInvoiceJourRequestBuilder<DeSerializersT> {
    return new LtmVendInvoiceJourRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmVendInvoiceJour<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmVendInvoiceJour<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmVendInvoiceJour<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LtmVendInvoiceJour,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmVendInvoiceJour,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_POINT_PREFIX: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE_DOCUMENT_NUM: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_07: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_06: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_05: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_04: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_03: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_02: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_01: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_09: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_08: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_10: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_3: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_DOC_NUM: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_2: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_1: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAI_CAE_DUE_DATE: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTRY_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAI_CAE: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_10: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_CODE: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_09: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_08: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_05: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_04: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_07: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_06: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_01: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_03: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_NUM: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_02: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_SET_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmVendInvoiceJour<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmVendInvoiceJour<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesPointPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_PREFIX: fieldBuilder.buildEdmTypeField(
          'SalesPointPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completeDocumentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'CompleteDocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_07: fieldBuilder.buildEdmTypeField(
          'ListFieldCode07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_06: fieldBuilder.buildEdmTypeField(
          'ListFieldCode06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_05: fieldBuilder.buildEdmTypeField(
          'ListFieldCode05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_04: fieldBuilder.buildEdmTypeField(
          'ListFieldCode04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_03: fieldBuilder.buildEdmTypeField(
          'ListFieldCode03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_02: fieldBuilder.buildEdmTypeField(
          'ListFieldCode02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_01: fieldBuilder.buildEdmTypeField(
          'ListFieldCode01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_09: fieldBuilder.buildEdmTypeField(
          'ListFieldCode09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_08: fieldBuilder.buildEdmTypeField(
          'ListFieldCode08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
        /**
         * Static representation of the {@link listFieldCode10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_10: fieldBuilder.buildEdmTypeField(
          'ListFieldCode10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_3: fieldBuilder.buildEdmTypeField(
          'Concept3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'CountryDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_2: fieldBuilder.buildEdmTypeField(
          'Concept2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'StateDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_1: fieldBuilder.buildEdmTypeField(
          'Concept1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caiCaeDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_CAE_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'CaiCaeDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link countryDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CountryDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link caiCae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_CAE: fieldBuilder.buildEdmTypeField('CaiCae', 'Edm.String', true),
        /**
         * Static representation of the {@link listField10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_10: fieldBuilder.buildEdmTypeField(
          'ListField10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_CODE: fieldBuilder.buildEdmTypeField(
          'ControlCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_09: fieldBuilder.buildEdmTypeField(
          'ListField09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_08: fieldBuilder.buildEdmTypeField(
          'ListField08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_05: fieldBuilder.buildEdmTypeField(
          'ListField05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_04: fieldBuilder.buildEdmTypeField(
          'ListField04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_07: fieldBuilder.buildEdmTypeField(
          'ListField07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_06: fieldBuilder.buildEdmTypeField(
          'ListField06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_01: fieldBuilder.buildEdmTypeField(
          'ListField01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_03: fieldBuilder.buildEdmTypeField(
          'ListField03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'StateDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_02: fieldBuilder.buildEdmTypeField(
          'ListField02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdingSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_SET_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingSetID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmVendInvoiceJour)
      };
    }

    return this._schema;
  }
}
