/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CaseCategoryTypeSecurities } from './CaseCategoryTypeSecurities';
import { CaseCategoryTypeSecuritiesRequestBuilder } from './CaseCategoryTypeSecuritiesRequestBuilder';
import { CaseCategoryType } from './CaseCategoryType';
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
export class CaseCategoryTypeSecuritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CaseCategoryTypeSecurities<DeSerializersT>, DeSerializersT>
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
  ): CaseCategoryTypeSecuritiesApi<DeSerializersT> {
    return new CaseCategoryTypeSecuritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CaseCategoryTypeSecurities;

  requestBuilder(): CaseCategoryTypeSecuritiesRequestBuilder<DeSerializersT> {
    return new CaseCategoryTypeSecuritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CaseCategoryTypeSecurities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CaseCategoryTypeSecurities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CaseCategoryTypeSecurities<DeSerializersT>,
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
    typeof CaseCategoryTypeSecurities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CaseCategoryTypeSecurities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CaseCategoryTypeSecurities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE: OrderableEdmTypeField<
      CaseCategoryTypeSecurities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASE_CATEGORY_TYPE: EnumField<
      CaseCategoryTypeSecurities<DeSerializers>,
      DeSerializersT,
      CaseCategoryType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CaseCategoryTypeSecurities<DeSerializers>>;
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
         * Static representation of the {@link securityRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE: fieldBuilder.buildEdmTypeField(
          'SecurityRole',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caseCategoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'CaseCategoryType',
          CaseCategoryType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CaseCategoryTypeSecurities)
      };
    }

    return this._schema;
  }
}
