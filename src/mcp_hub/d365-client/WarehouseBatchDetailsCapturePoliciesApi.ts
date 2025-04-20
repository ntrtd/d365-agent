/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseBatchDetailsCapturePolicies } from './WarehouseBatchDetailsCapturePolicies';
import { WarehouseBatchDetailsCapturePoliciesRequestBuilder } from './WarehouseBatchDetailsCapturePoliciesRequestBuilder';
import { WhsVendBatchDetailDisplayPolicy } from './WhsVendBatchDetailDisplayPolicy';
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
export class WarehouseBatchDetailsCapturePoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WarehouseBatchDetailsCapturePolicies<DeSerializersT>,
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
  ): WarehouseBatchDetailsCapturePoliciesApi<DeSerializersT> {
    return new WarehouseBatchDetailsCapturePoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarehouseBatchDetailsCapturePolicies;

  requestBuilder(): WarehouseBatchDetailsCapturePoliciesRequestBuilder<DeSerializersT> {
    return new WarehouseBatchDetailsCapturePoliciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseBatchDetailsCapturePolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseBatchDetailsCapturePolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseBatchDetailsCapturePolicies<DeSerializersT>,
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
    typeof WarehouseBatchDetailsCapturePolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseBatchDetailsCapturePolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseBatchDetailsCapturePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_DETAILS_CAPTURE_POLICY: OrderableEdmTypeField<
      WarehouseBatchDetailsCapturePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_BATCH_DETAILS_DISPLAY_POLICY: EnumField<
      WarehouseBatchDetailsCapturePolicies<DeSerializers>,
      DeSerializersT,
      WhsVendBatchDetailDisplayPolicy,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WarehouseBatchDetailsCapturePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_BATCH_DATE_VALUES: EnumField<
      WarehouseBatchDetailsCapturePolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarehouseBatchDetailsCapturePolicies<DeSerializers>>;
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
         * Static representation of the {@link batchDetailsCapturePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_DETAILS_CAPTURE_POLICY: fieldBuilder.buildEdmTypeField(
          'BatchDetailsCapturePolicy',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorBatchDetailsDisplayPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BATCH_DETAILS_DISPLAY_POLICY: fieldBuilder.buildEnumField(
          'VendorBatchDetailsDisplayPolicy',
          WhsVendBatchDetailDisplayPolicy,
          true
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
         * Static representation of the {@link calculateBatchDateValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_BATCH_DATE_VALUES: fieldBuilder.buildEnumField(
          'CalculateBatchDateValues',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseBatchDetailsCapturePolicies)
      };
    }

    return this._schema;
  }
}
