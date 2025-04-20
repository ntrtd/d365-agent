/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationAttributeSpecifications } from './AssetMaintenanceFunctionalLocationAttributeSpecifications';
import { AssetMaintenanceFunctionalLocationAttributeSpecificationsRequestBuilder } from './AssetMaintenanceFunctionalLocationAttributeSpecificationsRequestBuilder';
import { AssetMaintenanceSpecificationTypesApi } from './AssetMaintenanceSpecificationTypesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { EntAssetConditionType } from './EntAssetConditionType';
import { NoYes } from './NoYes';
import { CuesThresholdCriteria } from './CuesThresholdCriteria';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributeSpecificationsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceSpecificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SPECIFICATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_SPECIFICATION_TYPE: new OneToOneLink(
        'AssetMaintenanceSpecificationType',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationAttributeSpecifications;

  requestBuilder(): AssetMaintenanceFunctionalLocationAttributeSpecificationsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributeSpecificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationAttributeSpecifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationAttributeSpecifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_DATE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE_STRING: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_TYPE_DATA_TYPE: EnumField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      EntAssetConditionType,
      true,
      true
    >;
    VALUE_NO_YES: EnumField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THRESHOLD_CRITERIA: EnumField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      CuesThresholdCriteria,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_REAL: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_INTEGER: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceSpecificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SPECIFICATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<DeSerializers>
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'AttributeTypeId',
          'Edm.String',
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
         * Static representation of the {@link valueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'ValueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link valueString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_STRING: fieldBuilder.buildEdmTypeField(
          'ValueString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeTypeDataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_DATA_TYPE: fieldBuilder.buildEnumField(
          'AttributeTypeDataType',
          EntAssetConditionType,
          true
        ),
        /**
         * Static representation of the {@link valueNoYes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_NO_YES: fieldBuilder.buildEnumField('ValueNoYes', NoYes, true),
        /**
         * Static representation of the {@link thresholdCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_CRITERIA: fieldBuilder.buildEnumField(
          'ThresholdCriteria',
          CuesThresholdCriteria,
          true
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link valueReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_REAL: fieldBuilder.buildEdmTypeField(
          'ValueReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link valueInteger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_INTEGER: fieldBuilder.buildEdmTypeField(
          'ValueInteger',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceFunctionalLocationAttributeSpecifications
        )
      };
    }

    return this._schema;
  }
}
