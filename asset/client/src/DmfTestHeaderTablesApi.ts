/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DmfTestHeaderTables } from './DmfTestHeaderTables';
import { DmfTestHeaderTablesRequestBuilder } from './DmfTestHeaderTablesRequestBuilder';
import { DmfTestLineTablesApi } from './DmfTestLineTablesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DmfTestHeaderTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DmfTestHeaderTables<DeSerializersT>, DeSerializersT>
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
  ): DmfTestHeaderTablesApi<DeSerializersT> {
    return new DmfTestHeaderTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link dmfTestLineTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_TEST_LINE_TABLE: OneToManyLink<
      DmfTestHeaderTables<DeSerializersT>,
      DeSerializersT,
      DmfTestLineTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DmfTestLineTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DMF_TEST_LINE_TABLE: new OneToManyLink(
        'DMFTestLineTable',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DmfTestHeaderTables;

  requestBuilder(): DmfTestHeaderTablesRequestBuilder<DeSerializersT> {
    return new DmfTestHeaderTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DmfTestHeaderTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DmfTestHeaderTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DmfTestHeaderTables<DeSerializersT>,
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
    typeof DmfTestHeaderTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DmfTestHeaderTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DmfTestHeaderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_ID: OrderableEdmTypeField<
      DmfTestHeaderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DmfTestHeaderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dmfTestLineTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_TEST_LINE_TABLE: OneToManyLink<
      DmfTestHeaderTables<DeSerializersT>,
      DeSerializersT,
      DmfTestLineTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DmfTestHeaderTables<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', DmfTestHeaderTables)
      };
    }

    return this._schema;
  }
}
