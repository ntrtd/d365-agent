/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShiftDepreciationProfile } from './ShiftDepreciationProfile';
import { ShiftDepreciationProfileRequestBuilder } from './ShiftDepreciationProfileRequestBuilder';
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
export class ShiftDepreciationProfileApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShiftDepreciationProfile<DeSerializersT>, DeSerializersT>
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
  ): ShiftDepreciationProfileApi<DeSerializersT> {
    return new ShiftDepreciationProfileApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShiftDepreciationProfile;

  requestBuilder(): ShiftDepreciationProfileRequestBuilder<DeSerializersT> {
    return new ShiftDepreciationProfileRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShiftDepreciationProfile<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShiftDepreciationProfile<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShiftDepreciationProfile<DeSerializersT>,
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
    typeof ShiftDepreciationProfile,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShiftDepreciationProfile,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_PROFILE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOUBLE_SHIFT_PERCENTAGE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SINGLE_SHIFT_PERCENTAGE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRIPLE_SHIFT_PERCENTAGE: OrderableEdmTypeField<
      ShiftDepreciationProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ShiftDepreciationProfile<DeSerializers>>;
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
         * Static representation of the {@link depreciationProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PROFILE: fieldBuilder.buildEdmTypeField(
          'DepreciationProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link doubleShiftPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOUBLE_SHIFT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DoubleShiftPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link singleShiftPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_SHIFT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SingleShiftPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tripleShiftPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIPLE_SHIFT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TripleShiftPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShiftDepreciationProfile)
      };
    }

    return this._schema;
  }
}
