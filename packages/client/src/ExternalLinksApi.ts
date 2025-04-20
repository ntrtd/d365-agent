/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLinks } from './ExternalLinks';
import { ExternalLinksRequestBuilder } from './ExternalLinksRequestBuilder';
import { ExternalLinksGroupsApi } from './ExternalLinksGroupsApi';
import { HcmExternalLinksDisplayContext } from './HcmExternalLinksDisplayContext';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExternalLinksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalLinks<DeSerializersT>, DeSerializersT>
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
  ): ExternalLinksApi<DeSerializersT> {
    return new ExternalLinksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link externalLinksGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_LINKS_GROUPS: OneToOneLink<
      ExternalLinks<DeSerializersT>,
      DeSerializersT,
      ExternalLinksGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ExternalLinksGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EXTERNAL_LINKS_GROUPS: new OneToOneLink(
        'ExternalLinksGroups',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ExternalLinks;

  requestBuilder(): ExternalLinksRequestBuilder<DeSerializersT> {
    return new ExternalLinksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLinks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExternalLinks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExternalLinks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExternalLinks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExternalLinks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExternalLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_TEXT: OrderableEdmTypeField<
      ExternalLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      ExternalLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_CONTEXT: EnumField<
      ExternalLinks<DeSerializers>,
      DeSerializersT,
      HcmExternalLinksDisplayContext,
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      ExternalLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externalLinksGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_LINKS_GROUPS: OneToOneLink<
      ExternalLinks<DeSerializersT>,
      DeSerializersT,
      ExternalLinksGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalLinks<DeSerializers>>;
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
         * Static representation of the {@link displayText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayContext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_CONTEXT: fieldBuilder.buildEnumField(
          'DisplayContext',
          HcmExternalLinksDisplayContext,
          true
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalLinks)
      };
    }

    return this._schema;
  }
}
