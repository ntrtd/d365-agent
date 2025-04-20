/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LaborUnions } from './LaborUnions';
import { LaborUnionsRequestBuilder } from './LaborUnionsRequestBuilder';
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
export class LaborUnionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LaborUnions<DeSerializersT>, DeSerializersT>
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
  ): LaborUnionsApi<DeSerializersT> {
    return new LaborUnionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LaborUnions;

  requestBuilder(): LaborUnionsRequestBuilder<DeSerializersT> {
    return new LaborUnionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LaborUnions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LaborUnions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LaborUnions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LaborUnions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LaborUnions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNION_ID: OrderableEdmTypeField<
      LaborUnions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      LaborUnions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGOTIATOR: EnumField<
      LaborUnions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LaborUnions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_ID: fieldBuilder.buildEdmTypeField(
          'UnionID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link negotiator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGOTIATOR: fieldBuilder.buildEnumField('negotiator', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LaborUnions)
      };
    }

    return this._schema;
  }
}
