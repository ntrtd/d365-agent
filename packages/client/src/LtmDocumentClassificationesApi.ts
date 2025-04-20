/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationes } from './LtmDocumentClassificationes';
import { LtmDocumentClassificationesRequestBuilder } from './LtmDocumentClassificationesRequestBuilder';
import { LtmCopyDocumentNum } from './LtmCopyDocumentNum';
import { NoYes } from './NoYes';
import { LtmTaxpayerDetail } from './LtmTaxpayerDetail';
import { LtmControlCodeType } from './LtmControlCodeType';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LtmDocumentClassificationesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmDocumentClassificationes<DeSerializersT>, DeSerializersT>
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
  ): LtmDocumentClassificationesApi<DeSerializersT> {
    return new LtmDocumentClassificationesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationes;

  requestBuilder(): LtmDocumentClassificationesRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationes<DeSerializersT>,
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
    typeof LtmDocumentClassificationes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCEPT_LABEL_1: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_LABEL_3: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_LABEL_2: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPY_DOCUMENT_NUM: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      LtmCopyDocumentNum,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_PREFIX: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_TYPE_ID: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_IN_ALL: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_NAME: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_TAXES: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEPARATOR: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NOTE_3: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_2: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_1: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAXPAYER_DETAIL: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      LtmTaxpayerDetail,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_LEGAL_DESCRIPTION: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_CODE_TYPE: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      LtmControlCodeType,
      true,
      true
    >;
    WITHHOLDING_CALCULATION: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQ_CAE: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_CODE_REQUIRED: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORCE_CROSS_EXCHANGE_RATE: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_ENABLED: EnumField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_LETTER_ID: OrderableEdmTypeField<
      LtmDocumentClassificationes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmDocumentClassificationes<DeSerializers>>;
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
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link conceptLabel1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_LABEL_1: fieldBuilder.buildEdmTypeField(
          'ConceptLabel1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conceptLabel3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_LABEL_3: fieldBuilder.buildEdmTypeField(
          'ConceptLabel3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conceptLabel2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_LABEL_2: fieldBuilder.buildEdmTypeField(
          'ConceptLabel2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copyDocumentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_DOCUMENT_NUM: fieldBuilder.buildEnumField(
          'CopyDocumentNum',
          LtmCopyDocumentNum,
          true
        ),
        /**
         * Static representation of the {@link documentClassificationPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_PREFIX: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentClassificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_ALL: fieldBuilder.buildEnumField('UseInAll', NoYes, true),
        /**
         * Static representation of the {@link documentClassificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_NAME: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_TAXES: fieldBuilder.buildEnumField('IncludeTaxes', NoYes, true),
        /**
         * Static representation of the {@link separator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR: fieldBuilder.buildEdmTypeField(
          'Separator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'POSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link note3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_3: fieldBuilder.buildEdmTypeField('Note3', 'Edm.String', true),
        /**
         * Static representation of the {@link note2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_2: fieldBuilder.buildEdmTypeField('Note2', 'Edm.String', true),
        /**
         * Static representation of the {@link note1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_1: fieldBuilder.buildEdmTypeField('Note1', 'Edm.String', true),
        /**
         * Static representation of the {@link taxpayerDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXPAYER_DETAIL: fieldBuilder.buildEnumField(
          'TaxpayerDetail',
          LtmTaxpayerDetail,
          true
        ),
        /**
         * Static representation of the {@link documentClassificationLegalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_LEGAL_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'DocumentClassificationLegalDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', NoYes, true),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_CODE_TYPE: fieldBuilder.buildEnumField(
          'ControlCodeType',
          LtmControlCodeType,
          true
        ),
        /**
         * Static representation of the {@link withholdingCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_CALCULATION: fieldBuilder.buildEnumField(
          'WithholdingCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'NumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reqCae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_CAE: fieldBuilder.buildEnumField('ReqCAE', NoYes, true),
        /**
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'ControlCodeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forceCrossExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORCE_CROSS_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'ForceCrossExchangeRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_ENABLED: fieldBuilder.buildEnumField('POSEnabled', NoYes, true),
        /**
         * Static representation of the {@link documentClassificationLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationLetterId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationes)
      };
    }

    return this._schema;
  }
}
