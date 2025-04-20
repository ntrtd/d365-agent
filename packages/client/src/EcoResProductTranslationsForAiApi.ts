/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcoResProductTranslationsForAi } from './EcoResProductTranslationsForAi';
import { EcoResProductTranslationsForAiRequestBuilder } from './EcoResProductTranslationsForAiRequestBuilder';
import { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
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
export class EcoResProductTranslationsForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EcoResProductTranslationsForAi<DeSerializersT>, DeSerializersT>
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
  ): EcoResProductTranslationsForAiApi<DeSerializersT> {
    return new EcoResProductTranslationsForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_AI_ENTITY: OneToOneLink<
      EcoResProductTranslationsForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsForAiApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_AI_ENTITY: new OneToOneLink(
        'ReleasedProductAIEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EcoResProductTranslationsForAi;

  requestBuilder(): EcoResProductTranslationsForAiRequestBuilder<DeSerializersT> {
    return new EcoResProductTranslationsForAiRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EcoResProductTranslationsForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EcoResProductTranslationsForAi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EcoResProductTranslationsForAi<DeSerializersT>,
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
    typeof EcoResProductTranslationsForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EcoResProductTranslationsForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_KEY: OrderableEdmTypeField<
      EcoResProductTranslationsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      EcoResProductTranslationsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      EcoResProductTranslationsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_AI_ENTITY: OneToOneLink<
      EcoResProductTranslationsForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EcoResProductTranslationsForAi<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_KEY: fieldBuilder.buildEdmTypeField(
          'ProductKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EcoResProductTranslationsForAi)
      };
    }

    return this._schema;
  }
}
