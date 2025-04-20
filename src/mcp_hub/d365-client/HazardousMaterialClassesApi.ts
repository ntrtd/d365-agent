/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HazardousMaterialClasses } from './HazardousMaterialClasses';
import { HazardousMaterialClassesRequestBuilder } from './HazardousMaterialClassesRequestBuilder';
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
export class HazardousMaterialClassesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HazardousMaterialClasses<DeSerializersT>, DeSerializersT>
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
  ): HazardousMaterialClassesApi<DeSerializersT> {
    return new HazardousMaterialClassesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HazardousMaterialClasses;

  requestBuilder(): HazardousMaterialClassesRequestBuilder<DeSerializersT> {
    return new HazardousMaterialClassesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HazardousMaterialClasses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HazardousMaterialClasses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HazardousMaterialClasses<DeSerializersT>,
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
    typeof HazardousMaterialClasses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HazardousMaterialClasses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLASS_CODE: OrderableEdmTypeField<
      HazardousMaterialClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HazardousMaterialClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<HazardousMaterialClasses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link classCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_CODE: fieldBuilder.buildEdmTypeField(
          'ClassCode',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HazardousMaterialClasses)
      };
    }

    return this._schema;
  }
}
