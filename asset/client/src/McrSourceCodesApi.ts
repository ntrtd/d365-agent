/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrSourceCodes } from './McrSourceCodes';
import { McrSourceCodesRequestBuilder } from './McrSourceCodesRequestBuilder';
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
export class McrSourceCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrSourceCodes<DeSerializersT>, DeSerializersT>
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
  ): McrSourceCodesApi<DeSerializersT> {
    return new McrSourceCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrSourceCodes;

  requestBuilder(): McrSourceCodesRequestBuilder<DeSerializersT> {
    return new McrSourceCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrSourceCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<McrSourceCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<McrSourceCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof McrSourceCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(McrSourceCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECTED_ORDERS: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OTHER_COST: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUTURE_ORDER_DATE: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECTED_RETURNS: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECTED_FIRST_ORDER_DATE: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_COST: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARGET_ID: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_QUANTITY: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATALOG_NUMBER: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECTED_SALES: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAILING_COSTS: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ONLY_CATALOG_PLANS: EnumField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAIL_DATE: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRINTING_COSTS: OrderableEdmTypeField<
      McrSourceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<McrSourceCodes<DeSerializers>>;
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
         * Static representation of the {@link sourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'SourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_ORDERS: fieldBuilder.buildEdmTypeField(
          'ProjectedOrders',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link otherCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_COST: fieldBuilder.buildEdmTypeField(
          'OtherCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link futureOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'FutureOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectedReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_RETURNS: fieldBuilder.buildEdmTypeField(
          'ProjectedReturns',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectedFirstOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_FIRST_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectedFirstOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_COST: fieldBuilder.buildEdmTypeField(
          'ActualCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link targetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_ID: fieldBuilder.buildEdmTypeField(
          'TargetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DistributionQuantity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectedSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_SALES: fieldBuilder.buildEdmTypeField(
          'ProjectedSales',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mailingCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAILING_COSTS: fieldBuilder.buildEdmTypeField(
          'MailingCosts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onlyCatalogPlans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLY_CATALOG_PLANS: fieldBuilder.buildEnumField(
          'OnlyCatalogPlans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mailDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIL_DATE: fieldBuilder.buildEdmTypeField(
          'MailDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link printingCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTING_COSTS: fieldBuilder.buildEdmTypeField(
          'PrintingCosts',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrSourceCodes)
      };
    }

    return this._schema;
  }
}
