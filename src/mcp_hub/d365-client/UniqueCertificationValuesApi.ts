/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UniqueCertificationValues } from './UniqueCertificationValues';
import { UniqueCertificationValuesRequestBuilder } from './UniqueCertificationValuesRequestBuilder';
import { UniqueCertificationFieldTypeIt } from './UniqueCertificationFieldTypeIt';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class UniqueCertificationValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UniqueCertificationValues<DeSerializersT>, DeSerializersT>
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
  ): UniqueCertificationValuesApi<DeSerializersT> {
    return new UniqueCertificationValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UniqueCertificationValues;

  requestBuilder(): UniqueCertificationValuesRequestBuilder<DeSerializersT> {
    return new UniqueCertificationValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UniqueCertificationValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UniqueCertificationValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UniqueCertificationValues<DeSerializersT>,
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
    typeof UniqueCertificationValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UniqueCertificationValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FIELD: EnumField<
      UniqueCertificationValues<DeSerializers>,
      DeSerializersT,
      UniqueCertificationFieldTypeIt,
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      UniqueCertificationValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVE: EnumField<
      UniqueCertificationValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE_DESCRIPTION: OrderableEdmTypeField<
      UniqueCertificationValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<UniqueCertificationValues<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link field} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD: fieldBuilder.buildEnumField(
          'Field',
          UniqueCertificationFieldTypeIt,
          true
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', false),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link valueDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ValueDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UniqueCertificationValues)
      };
    }

    return this._schema;
  }
}
