/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationTypeAttributeRequirements } from './AssetMaintenanceFunctionalLocationTypeAttributeRequirements';
import { AssetMaintenanceFunctionalLocationTypeAttributeRequirementsRequestBuilder } from './AssetMaintenanceFunctionalLocationTypeAttributeRequirementsRequestBuilder';
import { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
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
export class AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationType',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor =
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements;

  requestBuilder(): AssetMaintenanceFunctionalLocationTypeAttributeRequirementsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypeAttributeRequirementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationTypeAttributeRequirements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationTypeAttributeRequirements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_DATE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE_STRING: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_TYPE_DATA_TYPE: EnumField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      EntAssetConditionType,
      true,
      true
    >;
    VALUE_NO_YES: EnumField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THRESHOLD_CRITERIA: EnumField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      CuesThresholdCriteria,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_REAL: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_INTEGER: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<DeSerializers>
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
         * Static representation of the {@link functionalLocationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationTypeId',
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
          AssetMaintenanceFunctionalLocationTypeAttributeRequirements
        )
      };
    }

    return this._schema;
  }
}
