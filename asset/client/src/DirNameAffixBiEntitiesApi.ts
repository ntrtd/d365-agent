/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DirNameAffixBiEntities } from './DirNameAffixBiEntities';
import { DirNameAffixBiEntitiesRequestBuilder } from './DirNameAffixBiEntitiesRequestBuilder';
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
export class DirNameAffixBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DirNameAffixBiEntities<DeSerializersT>, DeSerializersT>
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
  ): DirNameAffixBiEntitiesApi<DeSerializersT> {
    return new DirNameAffixBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DirNameAffixBiEntities;

  requestBuilder(): DirNameAffixBiEntitiesRequestBuilder<DeSerializersT> {
    return new DirNameAffixBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DirNameAffixBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DirNameAffixBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DirNameAffixBiEntities<DeSerializersT>,
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
    typeof DirNameAffixBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DirNameAffixBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AFFIX_TYPE: EnumField<
      DirNameAffixBiEntities<DeSerializers>,
      DeSerializersT,
      DirNameAffixType,
      true,
      true
    >;
    AFFIX: OrderableEdmTypeField<
      DirNameAffixBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      DirNameAffixBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      DirNameAffixBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DirNameAffixBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DirNameAffixBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link affixType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFIX_TYPE: fieldBuilder.buildEnumField(
          'AffixType',
          DirNameAffixType,
          true
        ),
        /**
         * Static representation of the {@link affix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFIX: fieldBuilder.buildEdmTypeField('Affix', 'Edm.String', false),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
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
        ALL_FIELDS: new AllFields('*', DirNameAffixBiEntities)
      };
    }

    return this._schema;
  }
}
