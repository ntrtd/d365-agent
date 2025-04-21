/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmVendorCaIs } from './LtmVendorCaIs';
import { LtmVendorCaIsRequestBuilder } from './LtmVendorCaIsRequestBuilder';
import { NoYes } from './NoYes';
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
export class LtmVendorCaIsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmVendorCaIs<DeSerializersT>, DeSerializersT>
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
  ): LtmVendorCaIsApi<DeSerializersT> {
    return new LtmVendorCaIsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmVendorCaIs;

  requestBuilder(): LtmVendorCaIsRequestBuilder<DeSerializersT> {
    return new LtmVendorCaIsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmVendorCaIs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmVendorCaIs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmVendorCaIs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmVendorCaIs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LtmVendorCaIs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI_DATE_FROM: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAI_DATE_TO: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAI: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI_DOC_NUM_FROM: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI_DOC_NUM_TO: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_LETTER_ID: OrderableEdmTypeField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI_SUSPENDED: EnumField<
      LtmVendorCaIs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmVendorCaIs<DeSerializers>>;
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
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caiDateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_DATE_FROM: fieldBuilder.buildEdmTypeField(
          'CAIDateFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link caiDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_DATE_TO: fieldBuilder.buildEdmTypeField(
          'CAIDateTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cai} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI: fieldBuilder.buildEdmTypeField('CAI', 'Edm.String', false),
        /**
         * Static representation of the {@link caiDocNumFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_DOC_NUM_FROM: fieldBuilder.buildEdmTypeField(
          'CAIDocNumFrom',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caiDocNumTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_DOC_NUM_TO: fieldBuilder.buildEdmTypeField(
          'CAIDocNumTo',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentClassificationLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationLetterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caiSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_SUSPENDED: fieldBuilder.buildEnumField('CAISuspended', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmVendorCaIs)
      };
    }

    return this._schema;
  }
}
