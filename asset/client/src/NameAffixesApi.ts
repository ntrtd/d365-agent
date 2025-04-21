/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NameAffixes } from './NameAffixes';
import { NameAffixesRequestBuilder } from './NameAffixesRequestBuilder';
import { DirNameAffixType } from './DirNameAffixType';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class NameAffixesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NameAffixes<DeSerializersT>, DeSerializersT>
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
  ): NameAffixesApi<DeSerializersT> {
    return new NameAffixesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NameAffixes;

  requestBuilder(): NameAffixesRequestBuilder<DeSerializersT> {
    return new NameAffixesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NameAffixes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NameAffixes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NameAffixes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NameAffixes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NameAffixes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE: EnumField<
      NameAffixes<DeSerializers>,
      DeSerializersT,
      DirNameAffixType,
      true,
      true
    >;
    AFFIX: OrderableEdmTypeField<
      NameAffixes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NameAffixes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NameAffixes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', DirNameAffixType, true),
        /**
         * Static representation of the {@link affix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFIX: fieldBuilder.buildEdmTypeField('Affix', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', NameAffixes)
      };
    }

    return this._schema;
  }
}
