/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApportionmentMappings } from './ApportionmentMappings';
import { ApportionmentMappingsRequestBuilder } from './ApportionmentMappingsRequestBuilder';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';
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
export class ApportionmentMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApportionmentMappings<DeSerializersT>, DeSerializersT>
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
  ): ApportionmentMappingsApi<DeSerializersT> {
    return new ApportionmentMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApportionmentMappings;

  requestBuilder(): ApportionmentMappingsRequestBuilder<DeSerializersT> {
    return new ApportionmentMappingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApportionmentMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApportionmentMappings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApportionmentMappings<DeSerializersT>,
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
    typeof ApportionmentMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApportionmentMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ApportionmentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_COST_TYPE_ID: OrderableEdmTypeField<
      ApportionmentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPORTIONMENT_METHOD: EnumField<
      ApportionmentMappings<DeSerializers>,
      DeSerializersT,
      ItmCostApportionmentMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApportionmentMappings<DeSerializers>>;
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
         * Static representation of the {@link shipCostTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShipCostTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link apportionmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPORTIONMENT_METHOD: fieldBuilder.buildEnumField(
          'ApportionmentMethod',
          ItmCostApportionmentMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApportionmentMappings)
      };
    }

    return this._schema;
  }
}
