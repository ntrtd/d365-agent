/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailBuyersPushes } from './RetailBuyersPushes';
import { RetailBuyersPushesRequestBuilder } from './RetailBuyersPushesRequestBuilder';
import { RetailDistributionTypeEx1 } from './RetailDistributionTypeEx1';
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
export class RetailBuyersPushesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailBuyersPushes<DeSerializersT>, DeSerializersT>
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
  ): RetailBuyersPushesApi<DeSerializersT> {
    return new RetailBuyersPushesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailBuyersPushes;

  requestBuilder(): RetailBuyersPushesRequestBuilder<DeSerializersT> {
    return new RetailBuyersPushesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailBuyersPushes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailBuyersPushes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailBuyersPushes<DeSerializersT>,
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
    typeof RetailBuyersPushes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailBuyersPushes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUYERS_PUSH_ID: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_TO: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_TYPE: EnumField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      RetailDistributionTypeEx1,
      true,
      true
    >;
    TRANSFER_ORDER_CREATED: EnumField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_FROM: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPECT_ASSORTMENTS: EnumField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_CREATED: EnumField<
      RetailBuyersPushes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailBuyersPushes<DeSerializers>>;
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
         * Static representation of the {@link buyersPushId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYERS_PUSH_ID: fieldBuilder.buildEdmTypeField(
          'BuyersPushId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
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
         * Static representation of the {@link replenishmentHierarchyValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_TYPE: fieldBuilder.buildEnumField(
          'DistributionType',
          RetailDistributionTypeEx1,
          true
        ),
        /**
         * Static representation of the {@link transferOrderCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_CREATED: fieldBuilder.buildEnumField(
          'TransferOrderCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link replenishmentHierarchyValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link respectAssortments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPECT_ASSORTMENTS: fieldBuilder.buildEnumField(
          'RespectAssortments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link replenishmentHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReplenishmentOrganizationPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CREATED: fieldBuilder.buildEnumField(
          'JournalCreated',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailBuyersPushes)
      };
    }

    return this._schema;
  }
}
