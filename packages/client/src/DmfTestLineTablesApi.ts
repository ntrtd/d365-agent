/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DmfTestLineTables } from './DmfTestLineTables';
import { DmfTestLineTablesRequestBuilder } from './DmfTestLineTablesRequestBuilder';
import { DmfTestHeaderTablesApi } from './DmfTestHeaderTablesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DmfTestLineTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DmfTestLineTables<DeSerializersT>, DeSerializersT>
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
  ): DmfTestLineTablesApi<DeSerializersT> {
    return new DmfTestLineTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dmfTestHeaderTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_TEST_HEADER_TABLE: OneToOneLink<
      DmfTestLineTables<DeSerializersT>,
      DeSerializersT,
      DmfTestHeaderTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DmfTestHeaderTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DMF_TEST_HEADER_TABLE: new OneToOneLink(
        'DMFTestHeaderTable',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DmfTestLineTables;

  requestBuilder(): DmfTestLineTablesRequestBuilder<DeSerializersT> {
    return new DmfTestLineTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DmfTestLineTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DmfTestLineTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DmfTestLineTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DmfTestLineTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DmfTestLineTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DmfTestLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_ID: OrderableEdmTypeField<
      DmfTestLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      DmfTestLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      DmfTestLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfTestHeaderTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_TEST_HEADER_TABLE: OneToOneLink<
      DmfTestLineTables<DeSerializersT>,
      DeSerializersT,
      DmfTestHeaderTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DmfTestLineTables<DeSerializers>>;
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
         * Static representation of the {@link headerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ID: fieldBuilder.buildEdmTypeField(
          'HeaderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DmfTestLineTables)
      };
    }

    return this._schema;
  }
}
