/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationSalesPointCaIs } from './LtmDocumentClassificationSalesPointCaIs';
import { LtmDocumentClassificationSalesPointCaIsRequestBuilder } from './LtmDocumentClassificationSalesPointCaIsRequestBuilder';
import { LtmAccountType } from './LtmAccountType';
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
export class LtmDocumentClassificationSalesPointCaIsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LtmDocumentClassificationSalesPointCaIs<DeSerializersT>,
      DeSerializersT
    >
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
  ): LtmDocumentClassificationSalesPointCaIsApi<DeSerializersT> {
    return new LtmDocumentClassificationSalesPointCaIsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationSalesPointCaIs;

  requestBuilder(): LtmDocumentClassificationSalesPointCaIsRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationSalesPointCaIsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationSalesPointCaIs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationSalesPointCaIs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationSalesPointCaIs<DeSerializersT>,
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
    typeof LtmDocumentClassificationSalesPointCaIs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationSalesPointCaIs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      LtmAccountType,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI_CAE: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_NUM_TO: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CA_ADDITIONAL: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUM_FROM: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      LtmDocumentClassificationSalesPointCaIs<DeSerializers>
    >;
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LtmAccountType,
          true
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
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caiCae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI_CAE: fieldBuilder.buildEdmTypeField('CaiCae', 'Edm.String', false),
        /**
         * Static representation of the {@link docNumTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM_TO: fieldBuilder.buildEdmTypeField(
          'DocNumTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link caAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CA_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CAAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docNumFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM_FROM: fieldBuilder.buildEdmTypeField(
          'DocNumFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationSalesPointCaIs)
      };
    }

    return this._schema;
  }
}
