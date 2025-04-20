/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkMenus } from './WhsMobileWorkMenus';
import { WhsMobileWorkMenusRequestBuilder } from './WhsMobileWorkMenusRequestBuilder';
import { WhsMobileWorkMenuItemsApi } from './WhsMobileWorkMenuItemsApi';
import { WhsMobileWorkSessionsApi } from './WhsMobileWorkSessionsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WhsMobileWorkMenusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WhsMobileWorkMenus<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkMenusApi<DeSerializersT> {
    return new WhsMobileWorkMenusApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link menuItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU_ITEMS: OneToManyLink<
      WhsMobileWorkMenus<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenuItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkMenus<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WhsMobileWorkMenuItemsApi<DeSerializersT>,
      WhsMobileWorkSessionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MENU_ITEMS: new OneToManyLink('MenuItems', this, linkedApis[0]),
      SESSION: new OneToOneLink('Session', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WhsMobileWorkMenus;

  requestBuilder(): WhsMobileWorkMenusRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkMenusRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkMenus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WhsMobileWorkMenus<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkMenus<DeSerializersT>,
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
    typeof WhsMobileWorkMenus,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkMenus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkMenus<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SESSION_REC_ID: OrderableEdmTypeField<
      WhsMobileWorkMenus<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBMISSION_TYPE: OrderableEdmTypeField<
      WhsMobileWorkMenus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL: OrderableEdmTypeField<
      WhsMobileWorkMenus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      WhsMobileWorkMenus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link menuItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU_ITEMS: OneToManyLink<
      WhsMobileWorkMenus<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenuItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkMenus<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkMenus<DeSerializers>>;
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
         * Static representation of the {@link sessionRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_REC_ID: fieldBuilder.buildEdmTypeField(
          'SessionRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link submissionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_TYPE: fieldBuilder.buildEdmTypeField(
          'SubmissionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL: fieldBuilder.buildEdmTypeField('Label', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', WhsMobileWorkMenus)
      };
    }

    return this._schema;
  }
}
