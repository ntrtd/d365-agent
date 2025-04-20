/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PricingAttributeGroups } from './PricingAttributeGroups';
import { PricingAttributeGroupsRequestBuilder } from './PricingAttributeGroupsRequestBuilder';
import { PricingAttributeLinksApi } from './PricingAttributeLinksApi';
import { NoYes } from './NoYes';
import { GupPricingAttributeSourceLevel } from './GupPricingAttributeSourceLevel';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PricingAttributeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PricingAttributeGroups<DeSerializersT>, DeSerializersT>
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
  ): PricingAttributeGroupsApi<DeSerializersT> {
    return new PricingAttributeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link gupPricingAttributeLink} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICING_ATTRIBUTE_LINK: OneToManyLink<
      PricingAttributeGroups<DeSerializersT>,
      DeSerializersT,
      PricingAttributeLinksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PricingAttributeLinksApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GUP_PRICING_ATTRIBUTE_LINK: new OneToManyLink(
        'GUPPricingAttributeLink',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PricingAttributeGroups;

  requestBuilder(): PricingAttributeGroupsRequestBuilder<DeSerializersT> {
    return new PricingAttributeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PricingAttributeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PricingAttributeGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PricingAttributeGroups<DeSerializersT>,
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
    typeof PricingAttributeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PricingAttributeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_VALID: EnumField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HELP_TEXT: OrderableEdmTypeField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_LEVEL: EnumField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSourceLevel,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRIENDLY_NAME: OrderableEdmTypeField<
      PricingAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupPricingAttributeLink} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICING_ATTRIBUTE_LINK: OneToManyLink<
      PricingAttributeGroups<DeSerializersT>,
      DeSerializersT,
      PricingAttributeLinksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PricingAttributeGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link isValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALID: fieldBuilder.buildEnumField('IsValid', NoYes, true),
        /**
         * Static representation of the {@link helpText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT: fieldBuilder.buildEdmTypeField(
          'HelpText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LEVEL: fieldBuilder.buildEnumField(
          'SourceLevel',
          GupPricingAttributeSourceLevel,
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
         * Static representation of the {@link friendlyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PricingAttributeGroups)
      };
    }

    return this._schema;
  }
}
