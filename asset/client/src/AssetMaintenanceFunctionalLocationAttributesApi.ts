/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationAttributes } from './AssetMaintenanceFunctionalLocationAttributes';
import { AssetMaintenanceFunctionalLocationAttributesRequestBuilder } from './AssetMaintenanceFunctionalLocationAttributesRequestBuilder';
import { AssetMaintenanceSpecificationTypesApi } from './AssetMaintenanceSpecificationTypesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceSpecificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SPECIFICATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
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

  entityConstructor = AssetMaintenanceFunctionalLocationAttributes;

  requestBuilder(): AssetMaintenanceFunctionalLocationAttributesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_DATE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE_STRING: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE_NO_YES: EnumField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE_REAL: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_INTEGER: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>,
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
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationAttributes<DeSerializers>
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
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        /**
         * Static representation of the {@link valueNoYes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_NO_YES: fieldBuilder.buildEnumField('ValueNoYes', NoYes, true),
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
          AssetMaintenanceFunctionalLocationAttributes
        )
      };
    }

    return this._schema;
  }
}
