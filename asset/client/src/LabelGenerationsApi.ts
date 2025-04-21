/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LabelGenerations } from './LabelGenerations';
import { LabelGenerationsRequestBuilder } from './LabelGenerationsRequestBuilder';
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
export class LabelGenerationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LabelGenerations<DeSerializersT>, DeSerializersT>
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
  ): LabelGenerationsApi<DeSerializersT> {
    return new LabelGenerationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LabelGenerations;

  requestBuilder(): LabelGenerationsRequestBuilder<DeSerializersT> {
    return new LabelGenerationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LabelGenerations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LabelGenerations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LabelGenerations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LabelGenerations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LabelGenerations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LabelGenerations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      LabelGenerations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SHELF_LABEL_GENERATED: EnumField<
      LabelGenerations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ITEM_LABEL_GENERATED: EnumField<
      LabelGenerations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LabelGenerations<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link isShelfLabelGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHELF_LABEL_GENERATED: fieldBuilder.buildEnumField(
          'IsShelfLabelGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isItemLabelGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_LABEL_GENERATED: fieldBuilder.buildEnumField(
          'IsItemLabelGenerated',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LabelGenerations)
      };
    }

    return this._schema;
  }
}
