/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntV1PositionTypes } from './IntV1PositionTypes';
import { IntV1PositionTypesRequestBuilder } from './IntV1PositionTypesRequestBuilder';
import { HcmEmploymentStatus } from './HcmEmploymentStatus';
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
export class IntV1PositionTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntV1PositionTypes<DeSerializersT>, DeSerializersT>
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
  ): IntV1PositionTypesApi<DeSerializersT> {
    return new IntV1PositionTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntV1PositionTypes;

  requestBuilder(): IntV1PositionTypesRequestBuilder<DeSerializersT> {
    return new IntV1PositionTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntV1PositionTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IntV1PositionTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntV1PositionTypes<DeSerializersT>,
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
    typeof IntV1PositionTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntV1PositionTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_TYPE_ID: OrderableEdmTypeField<
      IntV1PositionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASSIFICATION: EnumField<
      IntV1PositionTypes<DeSerializers>,
      DeSerializersT,
      HcmEmploymentStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IntV1PositionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntV1PositionTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link classification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSIFICATION: fieldBuilder.buildEnumField(
          'Classification',
          HcmEmploymentStatus,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntV1PositionTypes)
      };
    }

    return this._schema;
  }
}
