/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MeasurementCategoryEnabledModules } from './MeasurementCategoryEnabledModules';
import { MeasurementCategoryEnabledModulesRequestBuilder } from './MeasurementCategoryEnabledModulesRequestBuilder';
import { MeasurementCategoryEnabledForModule } from './MeasurementCategoryEnabledForModule';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class MeasurementCategoryEnabledModulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MeasurementCategoryEnabledModules<DeSerializersT>, DeSerializersT>
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
  ): MeasurementCategoryEnabledModulesApi<DeSerializersT> {
    return new MeasurementCategoryEnabledModulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MeasurementCategoryEnabledModules;

  requestBuilder(): MeasurementCategoryEnabledModulesRequestBuilder<DeSerializersT> {
    return new MeasurementCategoryEnabledModulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MeasurementCategoryEnabledModules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MeasurementCategoryEnabledModules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MeasurementCategoryEnabledModules<DeSerializersT>,
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
    typeof MeasurementCategoryEnabledModules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MeasurementCategoryEnabledModules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MODULE: EnumField<
      MeasurementCategoryEnabledModules<DeSerializers>,
      DeSerializersT,
      MeasurementCategoryEnabledForModule,
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      MeasurementCategoryEnabledModules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      MeasurementCategoryEnabledModules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MeasurementCategoryEnabledModules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField(
          'Module',
          MeasurementCategoryEnabledForModule,
          true
        ),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MeasurementCategoryEnabledModules)
      };
    }

    return this._schema;
  }
}
