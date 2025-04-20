/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryLevelProfileRanges } from './InventoryLevelProfileRanges';
import { InventoryLevelProfileRangesRequestBuilder } from './InventoryLevelProfileRangesRequestBuilder';
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
export class InventoryLevelProfileRangesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryLevelProfileRanges<DeSerializersT>, DeSerializersT>
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
  ): InventoryLevelProfileRangesApi<DeSerializersT> {
    return new InventoryLevelProfileRangesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryLevelProfileRanges;

  requestBuilder(): InventoryLevelProfileRangesRequestBuilder<DeSerializersT> {
    return new InventoryLevelProfileRangesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryLevelProfileRanges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryLevelProfileRanges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryLevelProfileRanges<DeSerializersT>,
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
    typeof InventoryLevelProfileRanges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryLevelProfileRanges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryLevelProfileRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_ID: OrderableEdmTypeField<
      InventoryLevelProfileRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      InventoryLevelProfileRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL: OrderableEdmTypeField<
      InventoryLevelProfileRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPPER_BOUND_INCLUSIVE: OrderableEdmTypeField<
      InventoryLevelProfileRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InventoryLevelProfileRanges<DeSerializers>>;
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
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL: fieldBuilder.buildEdmTypeField('Label', 'Edm.String', true),
        /**
         * Static representation of the {@link upperBoundInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_BOUND_INCLUSIVE: fieldBuilder.buildEdmTypeField(
          'UpperBoundInclusive',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryLevelProfileRanges)
      };
    }

    return this._schema;
  }
}
