/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransItBiEntities } from './TaxTransItBiEntities';
import { TaxTransItBiEntitiesRequestBuilder } from './TaxTransItBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { IntentLetterOriginIt } from './IntentLetterOriginIt';
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
export class TaxTransItBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransItBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransItBiEntitiesApi<DeSerializersT> {
    return new TaxTransItBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransItBiEntities;

  requestBuilder(): TaxTransItBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransItBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransItBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransItBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransItBiEntities<DeSerializersT>,
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
    typeof TaxTransItBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransItBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SPLIT_PAYM_DIRECT: EnumField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAFOND_DATE: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SPLIT_PAYM_REVERSE: EnumField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTENT_LETTER_ID: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REF_REC_ID: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PLAFOND_ID: OrderableEdmTypeField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_ORIGIN: EnumField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      IntentLetterOriginIt,
      true,
      true
    >;
    INVOICE_APPROVAL: EnumField<
      TaxTransItBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransItBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link splitPaymDirect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYM_DIRECT: fieldBuilder.buildEnumField(
          'SplitPaymDirect',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plafondDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_DATE: fieldBuilder.buildEdmTypeField(
          'PlafondDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link splitPaymReverse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYM_REVERSE: fieldBuilder.buildEnumField(
          'SplitPaymReverse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intentLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'IntentLetterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link plafondId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_ID: fieldBuilder.buildEdmTypeField(
          'PlafondId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intentLetterOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ORIGIN: fieldBuilder.buildEnumField(
          'IntentLetterOrigin',
          IntentLetterOriginIt,
          true
        ),
        /**
         * Static representation of the {@link invoiceApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_APPROVAL: fieldBuilder.buildEnumField(
          'InvoiceApproval',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransItBiEntities)
      };
    }

    return this._schema;
  }
}
