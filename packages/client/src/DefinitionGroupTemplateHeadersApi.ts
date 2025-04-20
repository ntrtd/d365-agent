/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefinitionGroupTemplateHeaders } from './DefinitionGroupTemplateHeaders';
import { DefinitionGroupTemplateHeadersRequestBuilder } from './DefinitionGroupTemplateHeadersRequestBuilder';
import { DefinitionGroupTemplateLinesApi } from './DefinitionGroupTemplateLinesApi';
import { DmfDefinitionGroupTemplateStatus } from './DmfDefinitionGroupTemplateStatus';
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
export class DefinitionGroupTemplateHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DefinitionGroupTemplateHeaders<DeSerializersT>, DeSerializersT>
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
  ): DefinitionGroupTemplateHeadersApi<DeSerializersT> {
    return new DefinitionGroupTemplateHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateLineEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_LINE_ENTITY_ROLE: OneToOneLink<
      DefinitionGroupTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateLineRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_LINE_ROLE: OneToOneLink<
      DefinitionGroupTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DefinitionGroupTemplateLinesApi<DeSerializersT>,
      DefinitionGroupTemplateLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DMF_DEFINITION_GROUP_TEMPLATE_LINE_ENTITY_ROLE: new OneToOneLink(
        'DMFDefinitionGroupTemplateLineEntityRole',
        this,
        linkedApis[0]
      ),
      DMF_DEFINITION_GROUP_TEMPLATE_LINE_ROLE: new OneToOneLink(
        'DMFDefinitionGroupTemplateLineRole',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DefinitionGroupTemplateHeaders;

  requestBuilder(): DefinitionGroupTemplateHeadersRequestBuilder<DeSerializersT> {
    return new DefinitionGroupTemplateHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DefinitionGroupTemplateHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DefinitionGroupTemplateHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DefinitionGroupTemplateHeaders<DeSerializersT>,
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
    typeof DefinitionGroupTemplateHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DefinitionGroupTemplateHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DefinitionGroupTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      DefinitionGroupTemplateHeaders<DeSerializers>,
      DeSerializersT,
      DmfDefinitionGroupTemplateStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DefinitionGroupTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATED_DATE_TIME: OrderableEdmTypeField<
      DefinitionGroupTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateLineEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_LINE_ENTITY_ROLE: OneToOneLink<
      DefinitionGroupTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateLineRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_LINE_ROLE: OneToOneLink<
      DefinitionGroupTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DefinitionGroupTemplateHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          DmfDefinitionGroupTemplateStatus,
          true
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
        /**
         * Static representation of the {@link validatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ValidatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DefinitionGroupTemplateHeaders)
      };
    }

    return this._schema;
  }
}
