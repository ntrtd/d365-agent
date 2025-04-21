/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseBookGroupRelations } from './LeaseBookGroupRelations';
import { LeaseBookGroupRelationsRequestBuilder } from './LeaseBookGroupRelationsRequestBuilder';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class LeaseBookGroupRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseBookGroupRelations<DeSerializersT>, DeSerializersT>
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
  ): LeaseBookGroupRelationsApi<DeSerializersT> {
    return new LeaseBookGroupRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseBookGroupRelations;

  requestBuilder(): LeaseBookGroupRelationsRequestBuilder<DeSerializersT> {
    return new LeaseBookGroupRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseBookGroupRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseBookGroupRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseBookGroupRelations<DeSerializersT>,
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
    typeof LeaseBookGroupRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseBookGroupRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_GROUP: OrderableEdmTypeField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOK_TYPE: OrderableEdmTypeField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LeaseBookGroupRelations<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseBookGroupRelations<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link leaseGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_GROUP: fieldBuilder.buildEdmTypeField(
          'LeaseGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseBookGroupRelations)
      };
    }

    return this._schema;
  }
}
