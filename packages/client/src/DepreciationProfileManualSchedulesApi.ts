/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationProfileManualSchedules } from './DepreciationProfileManualSchedules';
import { DepreciationProfileManualSchedulesRequestBuilder } from './DepreciationProfileManualSchedulesRequestBuilder';
import { DepreciationProfilesApi } from './DepreciationProfilesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DepreciationProfileManualSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DepreciationProfileManualSchedules<DeSerializersT>,
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
  ): DepreciationProfileManualSchedulesApi<DeSerializersT> {
    return new DepreciationProfileManualSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfileManualProfileId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE_MANUAL_PROFILE_ID: OneToOneLink<
      DepreciationProfileManualSchedules<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DepreciationProfilesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_DEPRECIATION_PROFILE_MANUAL_PROFILE_ID: new OneToOneLink(
        'AssetDepreciationProfileManualProfileId',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DepreciationProfileManualSchedules;

  requestBuilder(): DepreciationProfileManualSchedulesRequestBuilder<DeSerializersT> {
    return new DepreciationProfileManualSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DepreciationProfileManualSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DepreciationProfileManualSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DepreciationProfileManualSchedules<DeSerializersT>,
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
    typeof DepreciationProfileManualSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationProfileManualSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DepreciationProfileManualSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_ID: OrderableEdmTypeField<
      DepreciationProfileManualSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERVAL_NUMBER: OrderableEdmTypeField<
      DepreciationProfileManualSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      DepreciationProfileManualSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfileManualProfileId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE_MANUAL_PROFILE_ID: OneToOneLink<
      DepreciationProfileManualSchedules<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DepreciationProfileManualSchedules<DeSerializers>>;
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
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link intervalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'IntervalNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DepreciationProfileManualSchedules)
      };
    }

    return this._schema;
  }
}
