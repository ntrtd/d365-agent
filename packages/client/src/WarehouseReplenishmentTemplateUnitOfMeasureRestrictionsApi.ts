/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseReplenishmentTemplateUnitOfMeasureRestrictions } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictions';
import { WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsRequestBuilder } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsRequestBuilder';
import { WarehouseReplenishmentTemplatesApi } from './WarehouseReplenishmentTemplatesApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
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
export class WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
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
  ): WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT> {
    return new WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouseReplenishmentTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE: OneToOneLink<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseReplenishmentTemplatesApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_REPLENISHMENT_TEMPLATE: new OneToOneLink(
        'WarehouseReplenishmentTemplate',
        this,
        linkedApis[0]
      ),
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WarehouseReplenishmentTemplateUnitOfMeasureRestrictions;

  requestBuilder(): WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsRequestBuilder<DeSerializersT> {
    return new WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
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
    typeof WarehouseReplenishmentTemplateUnitOfMeasureRestrictions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseReplenishmentTemplateUnitOfMeasureRestrictions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_REPLENISHMENT_TEMPLATE_ID: OrderableEdmTypeField<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESTRICTION_UNIT_SYMBOL: OrderableEdmTypeField<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseReplenishmentTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE: OneToOneLink<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<DeSerializers>
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
         * Static representation of the {@link warehouseReplenishmentTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_REPLENISHMENT_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseReplenishmentTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link restrictionUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'RestrictionUnitSymbol',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          WarehouseReplenishmentTemplateUnitOfMeasureRestrictions
        )
      };
    }

    return this._schema;
  }
}
