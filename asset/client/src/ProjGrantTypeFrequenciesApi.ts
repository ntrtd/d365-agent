/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjGrantTypeFrequencies } from './ProjGrantTypeFrequencies';
import { ProjGrantTypeFrequenciesRequestBuilder } from './ProjGrantTypeFrequenciesRequestBuilder';
import { ProjGrantFrequencyType } from './ProjGrantFrequencyType';
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
export class ProjGrantTypeFrequenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjGrantTypeFrequencies<DeSerializersT>, DeSerializersT>
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
  ): ProjGrantTypeFrequenciesApi<DeSerializersT> {
    return new ProjGrantTypeFrequenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjGrantTypeFrequencies;

  requestBuilder(): ProjGrantTypeFrequenciesRequestBuilder<DeSerializersT> {
    return new ProjGrantTypeFrequenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjGrantTypeFrequencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjGrantTypeFrequencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjGrantTypeFrequencies<DeSerializersT>,
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
    typeof ProjGrantTypeFrequencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjGrantTypeFrequencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjGrantTypeFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_GRANT_TYPE_GRANT_TYPE: OrderableEdmTypeField<
      ProjGrantTypeFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREQUENCY: EnumField<
      ProjGrantTypeFrequencies<DeSerializers>,
      DeSerializersT,
      ProjGrantFrequencyType,
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      ProjGrantTypeFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjGrantTypeFrequencies<DeSerializers>>;
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
         * Static representation of the {@link projGrantTypeGrantType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_GRANT_TYPE_GRANT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProjGrantType_GrantType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          ProjGrantFrequencyType,
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjGrantTypeFrequencies)
      };
    }

    return this._schema;
  }
}
