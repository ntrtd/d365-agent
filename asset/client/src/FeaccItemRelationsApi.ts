/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FeaccItemRelations } from './FeaccItemRelations';
import { FeaccItemRelationsRequestBuilder } from './FeaccItemRelationsRequestBuilder';
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
export class FeaccItemRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FeaccItemRelations<DeSerializersT>, DeSerializersT>
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
  ): FeaccItemRelationsApi<DeSerializersT> {
    return new FeaccItemRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FeaccItemRelations;

  requestBuilder(): FeaccItemRelationsRequestBuilder<DeSerializersT> {
    return new FeaccItemRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FeaccItemRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FeaccItemRelations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FeaccItemRelations<DeSerializersT>,
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
    typeof FeaccItemRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FeaccItemRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FeaccItemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMS_CODE: OrderableEdmTypeField<
      FeaccItemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION_DATE: OrderableEdmTypeField<
      FeaccItemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      FeaccItemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TNVED_CODE: OrderableEdmTypeField<
      FeaccItemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FeaccItemRelations<DeSerializers>>;
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
         * Static representation of the {@link customsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_CODE: fieldBuilder.buildEdmTypeField(
          'CustomsCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link actionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_DATE: fieldBuilder.buildEdmTypeField(
          'ActionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tnvedCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TNVED_CODE: fieldBuilder.buildEdmTypeField(
          'TNVEDCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FeaccItemRelations)
      };
    }

    return this._schema;
  }
}
