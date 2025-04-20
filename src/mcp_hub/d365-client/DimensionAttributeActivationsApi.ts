/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionAttributeActivations } from './DimensionAttributeActivations';
import { DimensionAttributeActivationsRequestBuilder } from './DimensionAttributeActivationsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DimensionAttributeActivationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DimensionAttributeActivations<DeSerializersT>, DeSerializersT>
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
  ): DimensionAttributeActivationsApi<DeSerializersT> {
    return new DimensionAttributeActivationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DimensionAttributeActivations;

  requestBuilder(): DimensionAttributeActivationsRequestBuilder<DeSerializersT> {
    return new DimensionAttributeActivationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DimensionAttributeActivations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DimensionAttributeActivations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimensionAttributeActivations<DeSerializersT>,
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
    typeof DimensionAttributeActivations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimensionAttributeActivations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DO_ACTIVATE: EnumField<
      DimensionAttributeActivations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_COPY_VALUES: EnumField<
      DimensionAttributeActivations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DimensionAttributeActivations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link doActivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_ACTIVATE: fieldBuilder.buildEnumField('DoActivate', NoYes, true),
        /**
         * Static representation of the {@link doCopyValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COPY_VALUES: fieldBuilder.buildEnumField(
          'DoCopyValues',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimensionAttributeActivations)
      };
    }

    return this._schema;
  }
}
