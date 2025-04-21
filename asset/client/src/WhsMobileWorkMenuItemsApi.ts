/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkMenuItems } from './WhsMobileWorkMenuItems';
import { WhsMobileWorkMenuItemsRequestBuilder } from './WhsMobileWorkMenuItemsRequestBuilder';
import { WhsMobileWorkMenusApi } from './WhsMobileWorkMenusApi';
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
export class WhsMobileWorkMenuItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WhsMobileWorkMenuItems<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkMenuItemsApi<DeSerializersT> {
    return new WhsMobileWorkMenuItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link menu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU: OneToOneLink<
      WhsMobileWorkMenuItems<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenusApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WhsMobileWorkMenusApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MENU: new OneToOneLink('Menu', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WhsMobileWorkMenuItems;

  requestBuilder(): WhsMobileWorkMenuItemsRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkMenuItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkMenuItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WhsMobileWorkMenuItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkMenuItems<DeSerializersT>,
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
    typeof WhsMobileWorkMenuItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkMenuItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkMenuItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LABEL: OrderableEdmTypeField<
      WhsMobileWorkMenuItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_REC_ID: OrderableEdmTypeField<
      WhsMobileWorkMenuItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      WhsMobileWorkMenuItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link menu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU: OneToOneLink<
      WhsMobileWorkMenuItems<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenusApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkMenuItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL: fieldBuilder.buildEdmTypeField('Label', 'Edm.String', true),
        /**
         * Static representation of the {@link menuRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_REC_ID: fieldBuilder.buildEdmTypeField(
          'MenuRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WhsMobileWorkMenuItems)
      };
    }

    return this._schema;
  }
}
