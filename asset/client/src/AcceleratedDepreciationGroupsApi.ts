/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AcceleratedDepreciationGroups } from './AcceleratedDepreciationGroups';
import { AcceleratedDepreciationGroupsRequestBuilder } from './AcceleratedDepreciationGroupsRequestBuilder';
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
export class AcceleratedDepreciationGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AcceleratedDepreciationGroups<DeSerializersT>, DeSerializersT>
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
  ): AcceleratedDepreciationGroupsApi<DeSerializersT> {
    return new AcceleratedDepreciationGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AcceleratedDepreciationGroups;

  requestBuilder(): AcceleratedDepreciationGroupsRequestBuilder<DeSerializersT> {
    return new AcceleratedDepreciationGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AcceleratedDepreciationGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AcceleratedDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AcceleratedDepreciationGroups<DeSerializersT>,
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
    typeof AcceleratedDepreciationGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AcceleratedDepreciationGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EQUIPMENT_GROUP: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDUSTRY_ANNUAL_WORKING_DAYS: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EQUIPMENT_TYPE_DIVISION: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY_AVERAGE_HOURS_PER_DAY: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EQUIPMENT_TYPE: OrderableEdmTypeField<
      AcceleratedDepreciationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AcceleratedDepreciationGroups<DeSerializers>>;
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
         * Static representation of the {@link equipmentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'EquipmentGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link industryAnnualWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_ANNUAL_WORKING_DAYS: fieldBuilder.buildEdmTypeField(
          'IndustryAnnualWorkingDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link equipmentTypeDivision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT_TYPE_DIVISION: fieldBuilder.buildEdmTypeField(
          'EquipmentTypeDivision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industryAverageHoursPerDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_AVERAGE_HOURS_PER_DAY: fieldBuilder.buildEdmTypeField(
          'IndustryAverageHoursPerDay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
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
         * Static representation of the {@link equipmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'EquipmentType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AcceleratedDepreciationGroups)
      };
    }

    return this._schema;
  }
}
