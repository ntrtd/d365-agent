/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductStorageDimensionGroupChangeRequests } from './ReleasedProductStorageDimensionGroupChangeRequests';
import { ReleasedProductStorageDimensionGroupChangeRequestsRequestBuilder } from './ReleasedProductStorageDimensionGroupChangeRequestsRequestBuilder';
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
export class ReleasedProductStorageDimensionGroupChangeRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializersT>,
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
  ): ReleasedProductStorageDimensionGroupChangeRequestsApi<DeSerializersT> {
    return new ReleasedProductStorageDimensionGroupChangeRequestsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReleasedProductStorageDimensionGroupChangeRequests;

  requestBuilder(): ReleasedProductStorageDimensionGroupChangeRequestsRequestBuilder<DeSerializersT> {
    return new ReleasedProductStorageDimensionGroupChangeRequestsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductStorageDimensionGroupChangeRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductStorageDimensionGroupChangeRequests<DeSerializersT>,
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
    typeof ReleasedProductStorageDimensionGroupChangeRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductStorageDimensionGroupChangeRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_RESERVATION_HIERARCHY_NAME: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_UPDATED: EnumField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATCH_WEIGHT_ITEM_HANDLING_POLICY_NAME: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CONVERSION_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ReleasedProductStorageDimensionGroupChangeRequests<DeSerializers>
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryReservationHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'InventoryReservationHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_UPDATED: fieldBuilder.buildEnumField(
          'IsProductUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link catchWeightItemHandlingPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_ITEM_HANDLING_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'CatchWeightItemHandlingPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasureConversionSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CONVERSION_SEQUENCE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'UnitOfMeasureConversionSequenceGroupId',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ReleasedProductStorageDimensionGroupChangeRequests
        )
      };
    }

    return this._schema;
  }
}
