/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCrossDocks } from './RetailCrossDocks';
import { RetailCrossDocksRequestBuilder } from './RetailCrossDocksRequestBuilder';
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
export class RetailCrossDocksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailCrossDocks<DeSerializersT>, DeSerializersT>
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
  ): RetailCrossDocksApi<DeSerializersT> {
    return new RetailCrossDocksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailCrossDocks;

  requestBuilder(): RetailCrossDocksRequestBuilder<DeSerializersT> {
    return new RetailCrossDocksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailCrossDocks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailCrossDocks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailCrossDocks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailCrossDocks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCrossDocks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CROSS_DOCK_ID: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_TO: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISTRIBUTION_TYPE: EnumField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      RetailDistributionTypeEx1,
      true,
      true
    >;
    TRANSFER_ORDER_CREATED: EnumField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_ID: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_FROM: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPECT_ASSORTMENTS: EnumField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_CREATED: EnumField<
      RetailCrossDocks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailCrossDocks<DeSerializers>>;
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
         * Static representation of the {@link crossDockId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCK_ID: fieldBuilder.buildEdmTypeField(
          'CrossDockId',
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
         * Static representation of the {@link purchaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', RetailCrossDocks)
      };
    }

    return this._schema;
  }
}
